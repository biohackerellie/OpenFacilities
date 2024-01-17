'use server';
import path from 'path';
import fs from 'fs';
import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { Facility, Category } from '@/lib/db/schema';

export async function uploadImage(id: number, formData: FormData) {
  const file = formData.get('file') as File;
  if (file.size > 4780032) {
    throw new Error('File must be less than 4.5MB');
  }
  let filePath = '';
  try {
    const fileName = file?.name;
    const imagePath = path.join(`/images/uploads`, fileName);
    const imageStream = fs.createWriteStream(imagePath);
    filePath = imagePath;
    imageStream.write(Buffer.from(await file.arrayBuffer()));
    imageStream.end();
  } catch (error) {
    throw new Error('error uploading file', { cause: error });
  } finally {
    await db
      .update(Facility)
      .set({ imagePath: filePath })
      .where(eq(Facility.id, id));
  }

  revalidateTag('facilities');
}

export async function updateFacilityName(id: number, formData: FormData) {
  const name = formData.get('name') as string;
  await db.update(Facility).set({ name: name }).where(eq(Facility.id, id));
  revalidateTag('facilities');
}

export async function deleteFacility(id: number) {
  await db.delete(Facility).where(eq(Facility.id, id));
  revalidateTag('facilities');
}

export async function updateCategoryPrices(formData: FormData) {
  const price = formData.get('price') as unknown as number;
  const id = formData.get('id') as unknown as number;
  await db.update(Category).set({ price: price }).where(eq(Category.id, id));
  revalidateTag('facilities');
}

export async function updateCapaciaty(id: number, formData: FormData) {
  const capacity = formData.get('capacity') as unknown as number;
  await db
    .update(Facility)
    .set({ capacity: capacity })
    .where(eq(Facility.id, id));
  revalidateTag('facilities');
}
