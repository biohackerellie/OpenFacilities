'use server';

import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { User } from '@/lib/db/schema';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function Update(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  try {
    if (email && email.includes('@laurel.k12.mt.us')) {
      throw new Error('You cannot use an LPS email address');
    }
    if (name && email) {
      await db
        .update(User)
        .set({ name: name, email: email })
        .where(eq(User.id, id));
    } else if (name && !email) {
      await db.update(User).set({ name: name }).where(eq(User.id, id));
    } else if (!name && email) {
      await db.update(User).set({ email: email }).where(eq(User.id, id));
    }
  } catch (error) {
    throw new Error('Failed to update user');
  }

  return revalidatePath('/account/details', 'page');
}
