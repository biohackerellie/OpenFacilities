'use server';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { ReservationFees } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';

export default async function removeFee(feeId: any) {
  try {
    await db.delete(ReservationFees).where(eq(ReservationFees.id, feeId));

    return revalidateTag('reservations');
  } catch (error) {
    throw new Error();
  }
}
