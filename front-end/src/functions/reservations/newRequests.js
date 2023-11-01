'use server';
import React from 'react';

export default async function NewRequests() {
  let count = 0;
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/request', {
    next: { revalidate: 60 },
  });
  const requests = await res.json();
  count = requests.length;

  return count;
}
