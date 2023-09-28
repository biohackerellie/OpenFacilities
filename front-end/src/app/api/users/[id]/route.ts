import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
import { authOptions } from '../../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await prisma.user.findUnique({
    where: { id: params.id },
    include: {
      Reservation: {
        include: {
          ReservationDate: true,
          ReservationFees: true,
          Facility: true,
        },
      },
    },
    cacheStrategy: { swr: 60, ttl: 60 },
  });

  return NextResponse.json(serializeJSON(res));
}
