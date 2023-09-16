'use server';

import prisma from '@/lib/prisma';

export default async function verifyDoc(id: number) {
  const res = await prisma.insuranceFiles.update({
    where: {
      id: id,
    },
    data: {
      varified: true,
    },
  });
  return res;
}
