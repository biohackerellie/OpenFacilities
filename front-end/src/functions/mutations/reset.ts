'use server';

import { db } from '@/lib/db';
import { User } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import { Buffer } from 'buffer';
import { UserByEmail } from '@/lib/db/queries/users';
import { NextRequest, NextResponse } from 'next/server';

export default async function Reset(id: any, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await db
    .update(User)
    .set({
      password: hashedPassword,
    })
    .where(eq(User.id, String(id)));
}

export async function Email(formData: FormData) {
  const email = formData.get('email');
  const user = await UserByEmail.execute({ email: email });
  if (!user) {
    return NextResponse.json({ response: 404, message: 'User not found' });
  }
  const privateKey: string = Buffer.from(
    process.env.RSA_PRIVATE_KEY!,
    'base64'
  ).toString('utf-8');

  const token = jwt.sign({ id: user.id }, privateKey, {
    algorithm: 'RS256',
    expiresIn: '1h',
  });

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
        html: `<h1> Password Reset </h1> <p>Click <a href="${url}">here</a> to reset your password. \n If you did not request a password reset, you can disregard this email</p>`,
      }),
    });
  } catch (error) {
    throw new Error('Email not sent');
  }
}
