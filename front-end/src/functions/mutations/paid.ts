'use server';

import { db } from '@/lib/db';
import { Reservation } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export default async function Paid(id: any) {
  try {
    await db
      .update(Reservation)
      .set({
        paid: true,
      })
      .where(eq(Reservation.id, id));
    return revalidatePath(`/admin/reservations/${id}`, 'layout');
  } catch (error) {
    throw new Error();
  }
}
