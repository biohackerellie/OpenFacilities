'use server';

import prisma from '@/lib/prisma';

export default async function Payinperson(id: any) {
  const res = await prisma.reservation.update({
    where: {
      id: parseInt(id),
    },
    data: {
      inperson: true,
    },
  });

  return res;
}
