import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// export const runtime = 'edge';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (body.reservationID) {
      const reservation = await prisma.reservation.findUnique({
        where: {
          id: BigInt(body.reservationID),
        },
      });
      if (reservation?.approved === 'pending' && body.approved === 'approved') {
        const res = await prisma.reservation.update({
          where: {
            id: BigInt(body.reservationID),
          },
          data: {
            approved: body.approved,
          },
        });
      }
    }

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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle known Prisma errors
      return NextResponse.json({
        status: 500,
        message: `Database error: ${error.message}`,
      });
    } else if (error instanceof SyntaxError) {
      // Handle JSON parsing errors
      return NextResponse.json({
        status: 400,
        message: `Invalid JSON format: ${error.message}`,
      });
    } else {
      // Handle all other errors
      return NextResponse.json({
        status: 500,
        message: `Unknown error: ${error}`,
      });
    }
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
