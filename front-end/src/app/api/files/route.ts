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
    const { fileName, fileType, fileSize, id } = await req.json();
    console.log('request: ', req);
    if (!fileName || !fileType || !fileSize || !id) {
      return NextResponse.badRequest('Missing required parameters');
    }
    const bucketName = 'documents';
    const fileUrl = `https://s3.laurel.k12.mt.us/${bucketName}/${fileName}`;
    const putUrl = await minioClient.presignedPutObject(bucketName, fileName);

    const getUrl = await minioClient.presignedGetObject(
      bucketName,
      fileName,
      24 * 60 * 60
    );
    console.log('getUrl', getUrl);
    await prisma.insuranceFiles.create({
      data: {
        path: fileUrl,
        fileName: fileName,
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
