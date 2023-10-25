'use server';

import prisma from '@/lib/prisma';

export default async function updateEmail(id: number) {
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: id,
    },
    include: {
      Facility: true,
      User: true,
    },
    cacheStrategy: { swr: 3600, ttl: 3600 },
  });

  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: reservation?.User.email as string,
        from: 'Laurel Facility Rental',
        subject: 'Laurel Facility Reservation Update',
        html: `<h1> Your reservation for ${reservation?.Facility.name} has been updated. </h1> <p> Please visit https://laurel.k12.mt.us/reservation/${reservation?.id} to view the update. \n\n If you have any questions, please contact the Activities Director at lpsactivities@laurel.k12.mt.us </p>`,
      }),
    });
    return Response.json({ ok: true, status: 200 });
  } catch (error) {
    return Response.json({ ok: false, status: 500, body: error });
  }
}
