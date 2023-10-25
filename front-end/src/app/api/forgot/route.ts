import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import jwt, { Secret } from 'jsonwebtoken';
import { Buffer } from 'buffer';

export const runtime = 'edge';

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

  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: email,
        from: 'Laurel Public Schools',
        subject: 'Password Reset',
        html: `<h1> Password Reset </h1> <p>Click <a href="${url}">here</a> to reset your password.</p>`,
      }),
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Email not sent' });
  }
  return NextResponse.json({ status: 200, message: 'Email sent' });
}
