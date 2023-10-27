'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

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
      const reservation = await prisma.reservation.findUnique({
        where: {
          id: BigInt(reservationID),
        },
      });
      if (reservation?.approved === 'pending' && status === 'approved') {
        await prisma.reservation.update({
          where: {
            id: BigInt(reservationID),
          },
          data: {
            approved: status,
          },
        });
      }
    }

    await prisma.reservationDate.update({
      where: {
        id: BigInt(id),
      },
      data: {
        approved: status,
      },
    });
  } catch (error) {
    return error;
  }
  if (status === 'approved') {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + '/api/events/single',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );
    } catch (error) {
      return { message: 'failed to update event' };
    }
  }
  return revalidatePath(`/admin/reservations/${reservationID}`, 'layout');
}
