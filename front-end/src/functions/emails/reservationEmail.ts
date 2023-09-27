'use server';

import nodemailer from 'nodemailer';

type emailData = {
  to: string;
  message: string;
  subject: string;
};

export default async function reservationEmail(data: emailData) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"Facility Reservation" no_reply@laurel.k12.mt.us',
    to: data.to,
    subject: data.subject,
    text: data.message,
  });
}
