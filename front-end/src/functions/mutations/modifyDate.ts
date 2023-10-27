'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

interface IFormInput {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  id: any;
}
export default async function modifyDate(
  data: IFormInput,
  id: number,
  reservationID: number
) {
  await prisma.reservationDate.update({
    where: {
      id: id,
    },
    data: {
      startDate: data.startDate,
      endDate: data.endDate,
      startTime: data.startTime,
      endTime: data.endTime,
    },
  });
  return revalidatePath(`/admin/reservations/${reservationID}`, 'layout');
}
