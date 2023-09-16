'use server';
import prisma from '@/lib/prisma';

export default async function HandleDelete(id: number) {
  try {
    const response = await prisma.reservationDate.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error('An issue has occurred: ', error);
  }
  return;
}
