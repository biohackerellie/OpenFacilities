'use server';
import { db } from '@/lib/db';
import { Reservation } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath, revalidateTag } from 'next/cache';

export default async function HandleDelete(id: number) {
  try {
    await db.delete(Reservation).where(eq(Reservation.id, id));
  } catch (error) {
    throw new Error();
  }
  return revalidateTag('reservations');
}
