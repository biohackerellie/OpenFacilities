'use server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';

export default async function Checkout(id) {
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      user: true,
    },
  });

  const fees = reservation.fees;

  const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: fees, user: reservation.user.name }),
  });
  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`);
  }

  let responseData;
  let paymenturl;
  let paymentId;

  try {
    responseData = await response.json();
    paymenturl = responseData.url;
    paymentId = responseData.id;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: '"facility reservation" no_reply@laurel.k12.mt.us',
      to: reservation.user.email,
      subject: 'facility reservation Payment Link',
      text:
        'Click the link below to pay for your reservation: \n \n ' +
        paymenturl +
        '\n \n If you have any questions, please contact the Activities Director at lpsactivites@laurel.k12.mt.us',
    });
  } catch (error) {
    throw new Error('Server responded with empty body');
  }

  const payment = await prisma.reservation.update({
    where: {
      id: parseInt(id),
    },
    data: {
      paymenturl: paymenturl,
      paymentlinkid: paymentId,
    },
  });
}
