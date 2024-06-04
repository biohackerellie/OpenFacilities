'use server';
import path from 'path';
import fs from 'fs';
import { db } from '@/lib/db';
import { Facility, Category } from '@/lib/db/schema';
import { CategoryDescriptions } from '@/lib/types/constants';
import { revalidateTag } from 'next/cache';

export default async function newFacility(prevState: any, formData: FormData) {
  const name = formData.get('name') as unknown as string;
  const building = formData.get('building') as string;
  const address = formData.get('address') as string;
  const capacity = formData.get('capacity') as unknown as number;
  const category1 = formData.get('category1') as unknown as number;
  const category2 = formData.get('category2') as unknown as number;
  const category3 = formData.get('category3') as unknown as number;
  const googleCalendarId = formData.get('googleCalendarId') as string;
  const file = formData.get('file') as File;
  if (file.size > 4780032) {
    throw new Error('File must be less than 4.5MB');
  }
  let filePath = null;
  try {
    const fileName = file?.name;
    const imagePath = path.join(`/images/uploads`, fileName);
    const imageStream = fs.createWriteStream(imagePath);
    filePath = imagePath;
    imageStream.write(Buffer.from(await file.arrayBuffer()));
    imageStream.end();
  } catch (error) {
    throw new Error('Error uploading file', { cause: error });
  }

  try {
    const [NewFacility] = await db
      .insert(Facility)
      .values({
        name,
        building,
        address,
        capacity,
        googleCalendarId,
        imagePath: filePath,
      })
      .returning({ id: Facility.id });

    let cat1Price = 0;
    let cat2Price = 0;
    let cat3Price = 0;
    const staffPrice = 0;

    if (category1) {
      cat1Price = category1;
    }
    if (category2) {
      cat2Price = category2;
    }
    if (category3) {
      cat3Price = category3;
    }

    await db.insert(Category).values([
      {
        facilityId: NewFacility.id,
        price: staffPrice,
        name: CategoryDescriptions.Staff.name,
        description: CategoryDescriptions.Staff.description,
      },
      {
        facilityId: NewFacility.id,
        price: cat1Price,
        name: CategoryDescriptions.Category1.name,
        description: CategoryDescriptions.Category1.description,
      },
      {
        facilityId: NewFacility.id,
        price: cat2Price,
        name: CategoryDescriptions.Category2.name,
        description: CategoryDescriptions.Category2.description,
      },
      {
        facilityId: NewFacility.id,
        price: cat3Price,
        name: CategoryDescriptions.Category3.name,
        description: CategoryDescriptions.Category3.description,
      },
    ]);
  } catch (error) {
    return {
      message: 'Error creating facility',
    };
  }
  revalidateTag('facilities');
  return {
    message: 'Facility created successfully',
  };
}
