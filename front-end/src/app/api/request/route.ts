import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const res = await prisma.reservation.findMany({
    where: {
      approved: 'pending',
    },
    include: {
      Facility: true,
      ReservationDate: true,
      User: true,
    },
    cacheStrategy: { swr: 60, ttl: 10 },
  });
  return NextResponse.json(serializeJSON(res));
}
