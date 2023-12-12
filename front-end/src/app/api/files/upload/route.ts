import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { Reservation } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request): Promise<NextResponse> {
  if (!request.body) {
    return NextResponse.json({ error: 'No File Provided' }, { status: 400 });
  }
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || 'file';

  const blob = await put(filename, request.body, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  try {
    await db
      .update(Reservation)
      .set({ insuranceLink: blob.url })
      .where(eq(Reservation.id, Number(searchParams.get('id'))));
  } catch (error) {
    throw new Error('Error uploading file', { cause: error });
  }
  revalidateTag('reservations');
  return NextResponse.json({ 'File uploaded': true }, { status: 200 });
}
