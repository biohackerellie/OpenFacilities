'use server';

import { db } from '@/lib/db';
import { ReservationDate } from '@/lib/db/schema';
import { eq, sql } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export default async function modifyDate(
  id: number,
  reservationID: number,
  formData: FormData
) {
  const data = {
    startDate: formData.get('startDate') as unknown as string,
    endDate: formData.get('endDate') as unknown as string,
    startTime: formData.get('startTime') as unknown as string,
    endTime: formData.get('endTime') as unknown as string,
  };

  await db
    .update(ReservationDate)
    .set({
      startDate: data.startDate,
      endDate: data.endDate,
      startTime: data.startTime,
      endTime: data.endTime,
    })
    .where(eq(ReservationDate.id, id));

  revalidateTag('reservations');
}

export async function modifyDates(ids: number[], formData: FormData) {
  const data = {
    startTime: formData.get('startTime') as unknown as string,
    endTime: formData.get('endTime') as unknown as string,
  };

  await db.transaction(async (tx) => {
    if (!ids) return;
    for (const id of ids) {
      if (!id) continue;
      await tx
        .update(ReservationDate)
        .set({
          startTime: data.startTime,
          endTime: data.endTime,
        })
        .where(eq(ReservationDate.id, id));
    }
  });
  revalidateTag('reservations');
}
