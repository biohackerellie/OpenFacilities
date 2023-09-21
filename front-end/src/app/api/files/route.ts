//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

import { Client } from 'minio';

const minioClient = new Client({
  endPoint: 's3.laurel.k12.mt.us',
  useSSL: true,
  accessKey: process.env.S3_ACCESS_KEY as string,
  secretKey: process.env.S3_SECRET as string,
});

export async function POST(req: NextRequest) {
  try {
    const { filename, fileType, fileSize, id } = await req.json();
    console.log('request: ', req);
    if (!filename || !fileType || !fileSize || !id) {
      return NextResponse.badRequest('Missing required parameters');
    }
    const bucketName = 'documents';
    const fileUrl = `https://s3.laurel.k12.mt.us/${bucketName}/${filename}`;
    const putUrl = await minioClient.presignedPutObject(bucketName, filename);
    console.log('putUrl', putUrl);
    const getUrl = await minioClient.presignedGetObject(
      bucketName,
      filename,
      24 * 60 * 60
    );
    console.log('getUrl', getUrl);
    await prisma.insuranceFiles.create({
      data: {
        path: fileUrl,
        filename: filename,
        reservation: {
          connect: {
            id: parseInt(id),
          },
        },
      },
      include: {
        reservation: true,
      },
    });
    return NextResponse.json({ putUrl, getUrl }, { status: 200 });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
