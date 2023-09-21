import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await prisma.user.findUnique({
    where: { id },
    include: {
      reservation: {
        include: {
          reservationdate: true,
          reservationfees: true,
          facility: true,
        },
      },
    },
  });

  return NextResponse.json(res);
}
