//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import nextConnect from 'next-conenct';
import multer from 'multer';
import { Client } from 'minio';

const minioClient = new Client({
  endPoint: 's3.laurel.k12.mt.us',
  useSSL: true,
  accessKey: process.env.S3_ACCESS_KEY as string,
  secretKey: process.env.S3_SECRET as string,
});

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;
  const id = data.get('id') as unknown as any;

  const fileName = file.name;
  if (!file) {
    return NextRespones.json({ success: false, message: 'No file uploaded' });
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
    console.log('getUrl', getUrl);
    const uploadResponse = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    });

    if (!uploadResponse.ok) {
      return NextResponse.json({ status: 500, message: 'Upload failed' });
    }

    await prisma.reservation.update({
      where: { id: BigInt(id) },
      data: {
        insuranceLink: fileUrl,
      },
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
  return NextResponse.json({ status: 200, message: 'Upload Complete' });
}
