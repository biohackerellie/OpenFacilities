'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function costChange(id: number, formData: FormData) {
  let value;
  const cost = formData.get('newCost');
  if (cost === null || cost === undefined) {
    value = null;
  } else {
    //@ts-expect-error
    value = parseInt(cost);
  }
  console.log(value);
  const res = await prisma.reservation.update({
    where: { id: BigInt(id) },
    data: {
      costOverride: value,
    },
  });
  revalidatePath(`/admin/reservations/${id}/Pricing`);
}

export async function facilityChange(id: number, data: any) {
  console.log('id', id, 'formData', data);

  const facilityID = parseInt(data);
  const res = await prisma.reservation.update({
    where: { id: BigInt(id) },
    data: {
      facilityId: BigInt(facilityID),
    },
  });
  revalidatePath(`/admin/reservations/${id}/Pricing`);
}

export async function categoryChange(id: number, facilityID: any, data: any) {
  const categories = await prisma.category.findFirst({
    where: {
      facilityId: BigInt(facilityID),
      name: {
        contains: data,
      },
    },
  });

  const categoryID = categories?.id as unknown as number;
  const res = await prisma.reservation.update({
    where: { id: BigInt(id) },
    data: {
      categoryId: BigInt(categoryID),
    },
  });
  revalidatePath(`/admin/reservations/${id}/Pricing`);
}
