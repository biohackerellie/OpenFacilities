'use server';

import { db } from '@/lib/db';
import { Reservation } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export default async function Paid(formdata: FormData) {
  const id = formdata.get('id') as unknown as number;
  try {
    await db
      .update(Reservation)
      .set({
        paid: true,
      })
      .where(eq(Reservation.id, id));
    return revalidateTag('reservations');
  } catch (error) {
    throw new Error();
  }
}
