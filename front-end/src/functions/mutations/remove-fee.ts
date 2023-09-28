'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function removeFee(feeId: any) {
  await prisma.reservationFees.delete({
    where: { id: BigInt(feeId) },
  });
  revalidatePath('/admin/reservations/[id]/pricing', 'page');
}
