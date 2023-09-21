'use server';
import prisma from '@/lib/prisma';

export default async function HandleDelete(id: number) {
  try {
    const response = await prisma.reservationdate.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error('An issue has occurred: ', error);
  }
  return;
}
