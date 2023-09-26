import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import moment from 'moment';
import { serializeJSON } from '@/utils/serializeJSON';

const currentDate = moment().format('YYYY-MM-DD');

export async function GET(req: Request) {
  const res = await prisma.reservation.findMany({
    where: {
      approved: 'approved',
      ReservationDate: {
        some: {
          startDate: {
            gte: currentDate,
          },
        },
      },
    },
    include: {
      Facility: true,
      ReservationDate: true,
      User: true,
    },
  });
  return NextResponse.json(serializeJSON(res));
}
