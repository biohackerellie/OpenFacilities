'use server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

interface IFormInput {
  email: string;
  password: string;
  name: string;
}

export default async function Createuser(formData: IFormInput) {
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
