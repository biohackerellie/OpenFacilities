'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function HandleDelete(id: number) {
  try {
    const response = await prisma.reservation.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error('An issue has occurred: ', error);
  } finally {
    revalidatePath('/admin/reservations');
  }
  return;
}
