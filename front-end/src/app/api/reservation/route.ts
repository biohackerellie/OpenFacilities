import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import moment from 'moment';

export const dynamic = 'force-dynamic';

const currentDate = moment().format('YYYY-MM-DD');

export async function GET(req: Request) {
  const res = await prisma.reservation.findMany({
    where: {
      approved: 'approved',
      reservationdate: {
        some: {
          startdate: {
            gte: currentDate,
          },
        },
      },
    },
    include: {
      facility: true,
      reservationdate: true,
      user: true,
    },
  });
  return NextResponse.json(res);
}
