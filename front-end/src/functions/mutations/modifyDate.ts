'use server';

import { db } from '@/lib/db';
import { ReservationDate } from '@/lib/db/schema';
import { eq, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

interface IFormInput {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  id: any;
}
export default async function modifyDate(
  data: IFormInput,
  id: number,
  reservationID: number
) {
  await db
    .update(ReservationDate)
    .set({
      startDate: data.startDate,
      endDate: data.endDate,
      startTime: data.startTime,
      endTime: data.endTime,
    })
    .where(eq(ReservationDate.id, id));

  return revalidatePath(`/admin/reservations/${reservationID}`, 'layout');
}
