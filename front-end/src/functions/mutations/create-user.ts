'use server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

interface IFormInput {
  email: string;
  password: string;
  name: string;
}

export const runtime = 'nodejs';

export default async function CreateUser(formData: IFormInput) {
  const password = formData.password as string;
  const newHash = bcrypt.hashSync(password, 10);
  const res = await prisma.user.create({
    data: {
      email: formData.email as string,
      password: newHash,
      name: formData.name as string,
      tos: true,
    },
  });
  return res;
}
