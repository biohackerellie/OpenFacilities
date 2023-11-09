'use server';

import { db } from '@/lib/db';
import { CategoryByFacility } from '@/lib/db/queries/categories';
import { Reservation } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
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
  try {
    await db
      .update(Reservation)
      .set({
        costOverride: value,
      })
      .where(eq(Reservation.id, id));
    return revalidatePath(`/admin/reservations/${id}/Pricing`);
  } catch (error) {
    throw new Error();
  }
}

export async function facilityChange(id: number, data: any) {
  console.log('id', id, 'formData', data);

  const facilityID = parseInt(data);
  try {
    await db
      .update(Reservation)
      .set({
        facilityId: facilityID,
      })
      .where(eq(Reservation.id, id));

    return revalidatePath(`/admin/reservations/${id}/Pricing`);
  } catch (error) {
    throw new Error();
  }
}

export async function categoryChange(id: number, facilityID: any, data: any) {
  const categories = await CategoryByFacility.execute({
    facilityId: BigInt(facilityID),
    name: data,
  });

  const categoryID = categories?.id as unknown as number;
  try {
    await db
      .update(Reservation)
      .set({
        categoryId: categoryID,
      })
      .where(eq(Reservation.id, id));

    return revalidatePath(`/admin/reservations/${id}/Pricing`);
  } catch (error) {
    throw new Error();
  }
}
