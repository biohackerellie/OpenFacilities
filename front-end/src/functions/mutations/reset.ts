'use server';

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export default async function Reset(id: any, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: String(id) },
    data: { password: hashedPassword },
  });
}
