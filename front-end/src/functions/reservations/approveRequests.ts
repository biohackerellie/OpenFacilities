'use server';

import { revalidatePath } from 'next/cache';
import reservationEmail from '@/functions/emails/reservationEmail';
import prisma from '@/lib/prisma';

export async function approveReservation(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/events/POST`,
    {
      method: 'POST',
      body: JSON.stringify({ id: id }),
    }
  );
  if (response.status !== 200) {
    throw new Error('google event failed to create');
  } else {
    try {
      const res = await prisma.reservation.update({
        where: { id: BigInt(id) },
        data: {
          approved: 'approved',
          ReservationDate: {
            updateMany: {
              where: {
                reservationId: id,
              },
              data: {
                approved: 'approved',
              },
            },
          },
        },
        include: {
          User: true,
          ReservationDate: true,
        },
      });
      let message = `<H1>Reservation Approved</H1><p>Your reservation for ${res.eventName} has been approved.</p> <p> You can view the details at https://facilities.laurel.k12.mt.us/reservation/${id}. </p> <p> If applicable, please provide any and all payments and insurance information in person or in the link above prior to your event dates. </p> <p> If you have any questions, please contact the Activities Director at lpsactivities@laurel.k12.mt.us`;
      let user = res.User.email;
      let to = user;
      let subject = 'Your Facility Reservation has been approved';
      let data = { to, subject, message };
      await reservationEmail(data);
      revalidatePath('/admin/requests', 'page');
      revalidatePath('/admin/reservations', 'page');
      return 'success';
    } catch (error) {
      throw new Error('Something went wrong');
    }
  }
}

export async function denyReservation(id: number) {
  try {
    const res = await prisma.reservation.update({
      where: { id: BigInt(id) },
      data: {
        approved: 'denied',
        ReservationDate: {
          updateMany: {
            where: {
              reservationId: id,
            },
            data: {
              approved: 'denied',
            },
          },
        },
      },
      include: {
        User: true,
        ReservationDate: true,
      },
    });
    let message = `<H1>Reservation Denied</H1><p>Your reservation for ${res.eventName} has been denied.</p> <p> You can view the details at https://facilities.laurel.k12.mt.us/reservation/${id}. </p> <p> If you have any questions, please contact the Activities Director at lpsactivities@laurel.k12.mt.us`;
    let user = res.User.email;
    let to = user;
    let subject = 'Your Facility Reservation has been denied';
    let data = { to, subject, message };
    await reservationEmail(data);
    revalidatePath('/admin/requests', 'page');
    revalidatePath('/admin/reservations', 'page');
    return 'success';
  } catch (error) {
    throw new Error('Something went wrong');
  }
}
