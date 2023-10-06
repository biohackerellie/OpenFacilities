import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import jwt, { Secret } from 'jsonwebtoken';
import { Buffer } from 'buffer';

import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  console.log('email', email);
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, name: true },
  });

  if (!user) {
    return NextResponse.json({ status: 404, message: 'User not found' });
  }

  const privateKey: string = Buffer.from(
    process.env.RSA_PRIVATE_KEY as string,
    'base64'
  ).toString('utf-8');

  const token = jwt.sign({ id: user.id }, privateKey, {
    algorithm: 'RS256',
    expiresIn: '1h',
  });

  console.log('token', token);
  const url = `${process.env.NEXT_PUBLIC_HOST}/login/reset/${token}`;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Password Reset',
    html: `<p>Click <a href="${url}">here</a> to reset your password.</p>`,
  });

  return NextResponse.json({ status: 200, message: 'Email sent' });
}
