import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await prisma.user.findUnique({
    where: { id },
    include: {
      Reservation: {
        include: {
          ReservationDate: true,
          ReservationFees: true,
          Facility: true,
        },
      },
    },
  });

  return NextResponse.json(serializeJSON(res));
}
