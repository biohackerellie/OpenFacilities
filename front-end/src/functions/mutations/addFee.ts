'use server';
import { db } from '@/lib/db';
import { ReservationFees } from '@/lib/db/schema';
import { eq, sql } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

interface IForminput {
  additionalFees: any;
  feesType: string;
}

export default async function addFee(data: IForminput, id: any) {
  try {
    await db.insert(ReservationFees).values({
      additionalFees: parseInt(data.additionalFees),
      feesType: data.feesType,
      reservationId: id,
    });
    return revalidateTag('reservations');
  } catch (error) {
    throw new Error();
  }
}
