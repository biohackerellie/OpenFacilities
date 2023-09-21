import prisma from '@/lib/prisma';

import { updateRes } from '@/functions/reservations';

export async function changeCat(id: number, category: any) {
  try {
    await prisma.reservation.update({
      where: { id: id },
      data: {
        categoryid: parseInt(category),
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    updateRes;
  }
}
