import jwt from 'jsonwebtoken';
import React from 'react';
import ResetForm from './form';

async function decodeToken(token: string) {
  const data = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  });
  const res = await data.json();
  return res;
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
    const userID = data.userId.id;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <ResetForm id={userID} />
      </div>
    );
  }
}
