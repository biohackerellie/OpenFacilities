import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('request: ', body);

    const res = await prisma.reservation.update({
      where: {
        paymentLinkID: body.data.object.payment.order_id,
      },
      data: {
        paid: true,
      },
    });

    return NextResponse.json({ message: 'Reservation updated successfully' });
  } catch (error) {
    console.error('Failed to update reservation: ', error);
    return NextResponse.json(error);
  } finally {
    revalidatePath('/admin/reservations/[id]', 'page');
  }
}
