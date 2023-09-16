import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const res = await prisma.facility.findMany({
    include: {
      Category: true,
    },
  });
  return NextResponse.json(res);
}
