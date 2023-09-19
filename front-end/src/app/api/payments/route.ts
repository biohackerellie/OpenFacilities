//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'square';
import { randomUUID } from 'crypto';

const { checkoutApi } = new Client({
  accessToken: process.env.SQUARE_TOKEN,
  environment: 'production',
});

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('request: ', body);
  const response = await checkoutApi.createPaymentLink({
    idempotencyKey: randomUUID(),
    description: 'Facility Rental',
    quickPay: {
      name: 'Facility Reservation',
      priceMoney: {
        amount: BigInt(Math.round(body.amount * 100)),
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
    paymentNote: 'Facility Rental for ' + body.user,
  });

  console.log(response.result);
  return NextResponse.json(response.result.paymentLink);
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
