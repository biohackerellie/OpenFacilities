'use server';

import { GetReservationbyID } from '@/lib/db/queries/reservations';

export default async function updateEmail(id: number | BigInt) {
  const reservation = await GetReservationbyID.execute({ id: Number(id) });

  const res = await fetch(`https://api.epklabs.com/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: process.env.EMAIL_API_KEY,
      to: reservation?.User.email as string,
      from: 'Facility Rental',
      subject: 'Facility Reservation Update',
      html: `<h1> Your reservation for ${reservation?.Facility.name} has been updated. </h1> <p> Please visit https://open-facilities.com/reservation/${reservation?.id} to view the update.  </p>`,
    }),
  });
}
