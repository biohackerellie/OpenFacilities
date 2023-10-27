//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'square';
import generateId from '@/functions/calculations/generate-id';
import prisma from '@/lib/prisma';

const { checkoutApi } = new Client({
  accessToken: process.env.SQUARE_TOKEN,
  environment: 'production',
});

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  const uuid = generateId();
  console.log('request: ', body);
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
        locationId: process.env.SQUARE_LOCATION_ID,
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

    const paymentUrl = res.result.paymentLink.url;
    const paymentId = res.result.paymentLink.id;
    const id = body.id;

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
      return NextResponse.json({ status: 500, body: error });
    }

    const update = await prisma.reservation.update({
      where: {
        id: BigInt(id),
      },
      data: {
        paymentUrl: paymentUrl,
        paymentLinkID: paymentId,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, body: error });
  }
  return NextResponse.json({ status: 200, body: 'Payment Link Created' });
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
