import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export const runtime = 'edge';

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const res = await prisma.reservationDate.update({
      where: {
        id: BigInt(body.id),
      },
      data: {
        approved: body.approved,
      },
    });
  } catch (error) {
    console.log(error);
    NextResponse.json({ status: 500, message: error });
  }
  revalidatePath('/');
  return NextResponse.json({ status: 200, message: 'success' });
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
