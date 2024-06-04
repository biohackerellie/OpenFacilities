import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { Client } from 'square';
import generateId from '@/functions/calculations/generate-id';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { Reservation } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';

const { checkoutApi } = new Client({
  accessToken: process.env.SQUARE_TOKEN,
  //@ts-expect-error
  environment: 'production',
});
//@ts-expect-error
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  const uuid = generateId();
  try {
    const res = await checkoutApi.createPaymentLink({
      idempotencyKey: uuid,
      description: 'Facility Rental',
      quickPay: {
        name: body.description,
        priceMoney: {
          amount: BigInt(Math.round(body.fees * 100)),
          currency: 'USD',
        },
        locationId: process.env.SQUARE_LOCATION_ID!,
      },
      checkoutOptions: {
        allowTipping: false,
        askForShippingAddress: false,
        enableCoupon: false,
        enableLoyalty: false,
      },
      prePopulatedData: {},
      paymentNote: body.description,
    });

    const paymentUrl = res.result.paymentLink?.url;
    const paymentId = res.result.paymentLink?.id;
    const id = body.id;
    const update = await db
      .update(Reservation)
      .set({
        paymentLinkID: paymentId,
        paymentUrl: paymentUrl,
      })
      .where(eq(Reservation.id, id));

    try {
      await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: process.env.EMAIL_API_KEY,
          to: body.email,
          from: 'Facility Rental',
          subject: 'Facility Rental Payment Link',
          html:
            'Click the link below to pay for your reservation: \n \n ' +
            paymentUrl +
            '\n \n If you have any questions, please contact the Activities Director at lpsactivites@laurel.k12.mt.us',
        }),
      });
    } catch (error) {
      return NextResponse.json({ ok: false, body: error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ ok: false, body: error }, { status: 500 });
  }
  revalidateTag('reservations');
  return NextResponse.json(
    { ok: true, body: 'Payment Link Created' },
    { status: 200 }
  );
}

// const { result } = await paymentsApi.createPayment({
// 	idempotencyKey: randomUUID(),
// 	sourceId: body.sourceId,
// 	amountMoney: {
// 		amount: BigInt(Math.round(body.amount.amount * 100)),
// 		currency: 'USD',
// 	},
// });

// return NextResponse.json(result);
