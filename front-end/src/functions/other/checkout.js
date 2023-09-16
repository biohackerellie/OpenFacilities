'use server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';

export default async function Checkout(id) {
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      User: true,
    },
  });

  const fees = reservation.fees;

  const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: fees, user: reservation.User.name }),
  });
  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`);
  }

  let responseData;
  let paymentUrl;
  let paymentId;

  try {
    responseData = await response.json();
    paymentUrl = responseData.url;
    paymentId = responseData.id;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: '"Facility Reservation" no_reply@laurel.k12.mt.us',
      to: reservation.User.email,
      subject: 'Facility Reservation Payment Link',
      text:
        'Click the link below to pay for your reservation: \n \n ' +
        paymentUrl +
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
      paymentUrl: paymentUrl,
      paymentLinkID: paymentId,
    },
  });
}
