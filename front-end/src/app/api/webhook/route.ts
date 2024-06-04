import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { eq, and, gte, or, sql } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { Reservation } from '@/lib/db/schema';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const [res] = await db
      .update(Reservation)
      .set({
        paid: true,
      })
      .where(eq(Reservation.paymentLinkID, body.data.object.payment.order_id))
      .returning({ id: Reservation.id });
    if (!res) {
      throw new Error('Reservation not found');
    }
    const resId = res.id;
    revalidateTag('reservations');
    return NextResponse.json({ message: 'Reservation updated successfully' });
  } catch (error) {
    console.error('Failed to update reservation: ', error);
    return NextResponse.json(error);
  }
}
