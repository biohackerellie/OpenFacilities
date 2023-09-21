import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('request: ', body);

    const res = await prisma.reservation.update({
      where: {
        paymentlinkid: body.data.object.payment.order_id,
      },
      data: {
        paid: true,
      },
    });

    return NextResponse.json({ message: 'reservation updated successfully' });
  } catch (error) {
    console.error('Failed to update reservation: ', error);
    return NextResponse.json(error);
  }
}
