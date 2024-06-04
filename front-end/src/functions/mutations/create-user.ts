'use server';
import { db } from '@/lib/db';
import { User  } from '@/lib/db/schema';
import type {InsertUser} from '@/lib/db/schema';
import bcrypt from 'bcryptjs';
import { revalidateTag } from 'next/cache';
import generateId from '@/functions/calculations/generate-id';

export default async function CreateUser(formData: InsertUser) {
  const password = formData.password!;
  const newHash = bcrypt.hashSync(password, 10);
  try {
    await db.insert(User).values({
      id: generateId(),
      email: formData.email,
      password: newHash,
      name: formData.name,
      tos: true,
    });
  } catch (error) {
    console.log(error);
    throw new Error();
  }
  revalidateTag('users');
  return 'success';
}
