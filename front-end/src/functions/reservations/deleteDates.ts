'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function HandleDelete(id: number, reservationID: number) {
  try {
    const response = await prisma.reservationDate.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error('An issue has occurred: ', error);
  }
  return revalidatePath(`/admin/reservations/${reservationID}`, 'layout');
}
