'use server';
import { db } from '@/lib/db';
import { Reservation } from '@/lib/db/schema';
import { eq, sql } from 'drizzle-orm';

export default async function PiP(id: any) {
  try {
    await db
      .update(Reservation)
      .set({
        inPerson: true,
      })
      .where(eq(Reservation.id, id));
  } catch (error) {
    throw new Error();
  }
  return Response.json(({ response: 200, body: 'success' }.response = 200));
}
