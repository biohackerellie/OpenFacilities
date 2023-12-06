'use server';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { ReservationDate } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';

export default async function HandleDelete(id: number, reservationID: number) {
  try {
    const response = await db
      .delete(ReservationDate)
      .where(eq(ReservationDate.id, id));
  } catch (error) {
    throw new Error();
  }
  return revalidateTag('reservations');
}
