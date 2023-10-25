import { NextResponse, NextRequest } from 'next/server';

import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await prisma.user.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      tos: true,
      Reservation: {
        select: {
          id: true,
          insurance: true,
          userId: true,
          facilityId: true,
          categoryId: true,
          doorAccess: true,
          doorsDetails: true,
          approved: true,
          details: true,
          fees: true,
          name: true,
          eventName: true,
          techSupport: true,
          techDetails: true,
          phone: true,
          totalHours: true,
          inPerson: true,
          paid: true,
          insuranceLink: true,
          Facility: {
            select: {
              id: true,
              name: true,
              building: true,
            },
          },
          ReservationDate: {
            select: {
              id: true,
              startDate: true,
              endDate: true,
              startTime: true,
              endTime: true,
              reservationId: true,
              approved: true,
            },
          },
          ReservationFees: {
            select: {
              id: true,
              additionalFees: true,
              feesType: true,
              reservationId: true,
            },
          },
        },
      },
    },

    cacheStrategy: { swr: 60, ttl: 60 },
  });

  return NextResponse.json(serializeJSON(res));
}
