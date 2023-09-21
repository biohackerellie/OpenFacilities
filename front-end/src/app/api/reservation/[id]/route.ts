import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const res = await prisma.reservation.findUnique({
    where: { id },
    include: {
      Facility: true,
      User: true,
      Events: true,
      ReservationDate: true,
      InsuranceFiles: true,
      ReservationFees: true,
      Category: true,
    },
  });
  return NextResponse.json(serializeJSON(res));
}
