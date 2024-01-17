'use server';
import { put } from '@vercel/blob';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { Reservation } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';

export async function upload(id: number, formData: FormData) {
  const file = formData.get('file') as File;
  const blob = await put(file.name, file, { access: 'public' });

  try {
    await db
      .update(Reservation)
      .set({ insuranceLink: blob.url })
      .where(eq(Reservation.id, id));
  } catch (error) {
    throw new Error('Error uploading file', { cause: error });
  }
  revalidateTag('reservations');
}
