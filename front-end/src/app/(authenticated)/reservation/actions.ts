'use server';

import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

async function getReservation(id: number) {
  'use server';
  const reservation = await prisma.reservation.findUnique({
    where: { id },
    include: {
      Facility: true,
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
      ReservationDate: true,
      InsuranceFiles: true,
      ReservationFees: true,
      Category: true,
    },
    cacheStrategy: { swr: 10, ttl: 10 },
  });
  return serializeJSON(reservation);
}

export { getReservation };
