import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

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
  });
  return NextResponse.json(res);
}
