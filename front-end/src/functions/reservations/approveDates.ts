//@ts-nocheck

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const runtime = 'edge';

export async function approveDate(id: number) {
  await prisma.reservationDate.update({
    where: {
      id: BigInt(id),
    },
    data: {
      approved: 'approved',
    },
  });

  revalidatePath('/');
  return approvedDate;
}
