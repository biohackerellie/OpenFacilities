'use server';

import { revalidatePath } from 'next/cache';

export async function approveReservation(id: number) {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/events`, {
  //   method: 'POST',
  //   body: JSON.stringify({ id: id }),
  // });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        approved: 'approved',
        subject: 'Your Facility Reservation has been approved!',
      }),
    }
  );
  // const event = await response.json();
  // const updated = await res.json();

  return res.json();
}

export async function denyReservation(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        approved: 'denied',
        subject: 'Your Facility Reservation has been denied',
      }),
    }
  );

  revalidatePath('/');
  return res.json();
}
