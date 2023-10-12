import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
import reservationEmail from '@/functions/emails/reservationEmail';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const res = await prisma.reservation.findUnique({
    where: { id },
    include: {
      Facility: true,
      User: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          tos: true,
        },
      },
      Events: true,
      ReservationDate: true,

      ReservationFees: true,
      Category: true,
    },
    cacheStrategy: { swr: 60, ttl: 10 },
  });
  return NextResponse.json(serializeJSON(res));
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = BigInt(params.id);
  const body = await request.json();
  try {
    const res = await prisma.reservation.update({
      where: { id: id },
      data: {
        approved: body.approved,
        ReservationDate: {
          updateMany: {
            where: {
              reservationId: id,
            },
            data: {
              approved: body.approved,
            },
          },
        },
      },
      include: {
        User: true,
        ReservationDate: true,
      },
    });
    const user = res.User.email;
    let to = user;
    let subject = body.subject;
    let message = `Your reservation for ${res.eventName} has been ${body.approved}. You can view the details at https://open-facilities.com/reservation/${id} . If you have any questions, please contact the Activities Director at email`;
    let data = { to, subject, message };
    await reservationEmail(data);
  } catch (error) {
    return NextResponse.json({ status: 500, message: error });
  }
  return NextResponse.json({ status: 200, message: 'success' });
}
