import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(req: Request) {
  const res = await prisma.reservation.findMany({
    where: {
      approved: 'pending',
    },
    include: {
      Facility: true,
      ReservationDate: true,
      User: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          tos: true,
        },
      },
    },
    cacheStrategy: { swr: 60, ttl: 10 },
  });
  return NextResponse.json(serializeJSON(res));
}
