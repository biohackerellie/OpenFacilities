'use server';

import prisma from '@/lib/prisma';
import bycrypt from 'bcrypt';

export default async function Reset(id: any, password: string) {
  const hashedPassword = await bycrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: String(id) },
    data: { password: hashedPassword },
  });
}
