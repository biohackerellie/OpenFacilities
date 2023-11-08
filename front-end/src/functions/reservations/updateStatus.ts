'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { Reservation, ReservationDate } from '@/lib/db/schema';
import { GetReservationbyID } from '@/lib/db/queries/reservations';
import { CreateGoogleEvent } from '../google/singleDate';

type props = {
  id: number;
  status: 'approved' | 'denied' | 'pending';
  reservationID?: number;
};

export default async function UpdateStatus({
  id,
  status,
  reservationID,
}: props) {
  try {
    if (reservationID) {
      const reservation = await GetReservationbyID.execute({
        id: reservationID,
      });

      if (reservation?.approved === 'pending' && status === 'approved') {
        await db
          .update(Reservation)
          .set({
            approved: status,
          })
          .where(eq(Reservation.id, BigInt(reservationID)));
      }
    }

    await db
      .update(ReservationDate)
      .set({
        approved: status,
      })
      .where(eq(ReservationDate.id, BigInt(id)));
  } catch (error) {
    return error;
  }
  if (status === 'approved') {
    try {
      await CreateGoogleEvent(id);
    } catch (error) {
      return { message: 'failed to update event' };
    }
  }
  return revalidatePath(`/admin/reservations/${reservationID}`, 'layout');
}
