'use server';

import prisma from '@/lib/prisma';

export default async function Paid(id: any) {
  const update = await prisma.reservation.update({
    where: {
      id: parseInt(id),
    },
    data: {
      paid: true,
    },
  });
  if (update) {
    return update;
  } else {
    alert('Error updating reservation');
  }
}
