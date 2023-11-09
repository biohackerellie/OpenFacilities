'use server';
import { db } from '@/lib/db';
import { User, type InsertUser } from '@/lib/db/schema';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

export default async function CreateUser(formData: InsertUser) {
  const password = formData.password as string;
  const newHash = bcrypt.hashSync(password, 10);
  try {
    await db.insert(User).values({
      email: formData.email,
      password: newHash,
      name: formData.name,
      tos: true,
    });
    return revalidatePath('/');
  } catch (error) {
    throw new Error();
  }
}
