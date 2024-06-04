//@ts-nocheck

import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Client } from 'minio';
import { revalidatePath } from 'next/cache';
import { Reservation } from '@/lib/db/schema';

const minioClient = new Client({
  endPoint: 's3.laurel.k12.mt.us',
  useSSL: true,
  accessKey: process.env.S3_ACCESS_KEY!,
  secretKey: process.env.S3_SECRET!,
});

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;
  const id = data.get('id') as unknown as any;

  const fileName = file.name;
  if (!file) {
    return NextResponse.json({ success: false, message: 'No file uploaded' });
  }

  const bucketName = 'documents';
  const fileUrl = `https://s3.laurel.k12.mt.us/${bucketName}/${file.name}`;
  try {
    const putUrl = await minioClient.presignedPutObject(bucketName, fileName);

    const getUrl = await minioClient.presignedGetObject(
      bucketName,
      fileName,
      24 * 60 * 60
    );
    const uploadResponse = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    });

    if (!uploadResponse.ok) {
      return NextResponse.json({ status: 500, message: 'Upload failed' });
    }

    await db
      .update(Reservation)
      .set({
        insuranceLink: fileUrl,
      })
      .where({ id: id });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
  revalidatePath(path, 'page');
  return NextResponse.json({ status: 200, message: 'Upload Complete' });
}
