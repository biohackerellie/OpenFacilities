import prisma from '@/lib/prisma';

import { updateRes } from '@/functions';

export async function changeCat(id: number, category: any) {
  try {
    await prisma.reservation.update({
      where: { id: id },
      data: {
        categoryId: parseInt(category),
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    updateRes;
  }
}
