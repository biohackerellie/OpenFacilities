import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
export async function PUT(request: Request) {
  const body = await request.json();

  const res = await prisma.reservationDate.update({
    where: {
      id: BigInt(body.id),
    },
    data: {
      approved: body.approved,
    },
  });
  revalidatePath('/');
  return NextResponse.json(res);
}

export async function DELETE(request: Request) {
  const body = await request.json();

  const res = await prisma.reservationDate.delete({
    where: {
      id: BigInt(body.id),
    },
  });
  revalidatePath('/');
  return NextResponse.json(res);
}
