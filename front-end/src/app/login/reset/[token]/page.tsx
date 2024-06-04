import jwt from 'jsonwebtoken';
import React from 'react';
import ResetForm from './form';

async function decodeToken(token: string) {
  'use server';

  const publicKey: string = Buffer.from(
    process.env.RSA_PUBLIC_KEY!,
    'base64'
  ).toString('utf-8');
  const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
  if (!decoded) {
    throw new Error('Invalid token');
  }

  return decoded;
}

export default async function ResetPage({
  params,
}: {
  params: { token: string };
}) {
  const data = await decodeToken(params.token);

  if (!data) {
    return <div>Invalid token</div>;
  } else {
    // @ts-expect-error
    const { id: userID } = data;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <ResetForm id={userID} />
      </div>
    );
  }
}
