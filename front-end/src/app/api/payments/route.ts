//@ts-nocheck

import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'square';
import { randomUUID } from 'crypto';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';

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
  try {
    const res = await checkoutApi.createPaymentLink({
      idempotencyKey: randomUUID(),
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

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = await transporter.sendMail({
      from: '"Facility Rental" no_reply@laurel.k12.mt.us',
      to: body.email,
      subject: 'Facility Rental Payment Link',
      text:
        'Click the link below to pay for your reservation: \n \n ' +
        paymentUrl +
        '\n \n If you have any questions, please contact the Activities Director at lpsactivites@laurel.k12.mt.us',
    });
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
