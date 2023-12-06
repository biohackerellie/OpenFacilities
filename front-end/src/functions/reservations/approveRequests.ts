'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

import reservationEmail from '@/functions/emails/reservationEmail';
import CreateGoogleEvents from '../google/multipleDates';
import { db } from '@/lib/db';
import { eq, sql, and } from 'drizzle-orm';
import { Reservation, ReservationDate, User } from '@/lib/db/schema';

export async function approveReservation(id: number) {
  const response = await CreateGoogleEvents(id);
  if (response.status !== 200) {
    throw new Error('google event failed to create');
  } else {
    try {
      const res = await db.transaction(async (tx) => {
        const [newID] = await tx
          .update(Reservation)
          .set({ approved: 'approved' })
          .where(eq(Reservation.id, id))
          .returning({
            userID: Reservation.userId,
            eventName: Reservation.eventName,
          });
        await tx
          .update(ReservationDate)
          .set({ approved: 'approved' })
          .where(eq(ReservationDate.reservationId, id));

        const userId = newID.userID;
        const [email] = await tx
          .select({ email: User.email })
          .from(User)
          .where(eq(User.id, userId));
        const eventName = newID.eventName;
        const user = email.email;
        return { user, eventName };
      });

      let message = `<H1>Reservation Approved</H1><p>Your reservation for ${res.eventName} has been approved.</p> <p> You can view the details at https://facilities.epklabs.com/reservation/${id}. </p> <p> If applicable, please provide any and all payments and insurance information in person or in the link above prior to your event dates. </p> <p> If you have any questions, please contact the Activities Director at ExampleSchoolactivities@epklabs.com`;
      let user = res.user;
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

// Deny a reservation
export async function denyReservation(id: number) {
  try {
    const res = await db.transaction(async (tx) => {
      const [newID] = await tx
        .update(Reservation)
        .set({ approved: 'denied' })
        .where(eq(Reservation.id, id))
        .returning({
          userID: Reservation.userId,
          eventName: Reservation.eventName,
        });
      await tx
        .update(ReservationDate)
        .set({ approved: 'denied' })
        .where(eq(ReservationDate.reservationId, id));

      const userId = newID.userID;
      const [email] = await tx
        .select({ email: User.email })
        .from(User)
        .where(eq(User.id, userId));
      const eventName = newID.eventName;
      const user = email.email;
      return { user, eventName };
    });
    let message = `<H1>Reservation Denied</H1><p>Your reservation for ${res.eventName} has been denied.</p> <p> You can view the details at https://facilities.epklabs.com/reservation/${id}. </p> <p> If you have any questions, please contact the Activities Director at ExampleSchoolactivities@epklabs.com`;
    let user = res.user;
    let to = user;
    let subject = 'Your Facility Reservation has been denied';
    let data = { to, subject, message };
    await reservationEmail(data);
    revalidatePath('/admin/requests', 'page');
    revalidateTag('reservations');
    revalidatePath('/admin/reservations', 'page');
    return 'success';
  } catch (error) {
    throw new Error('Something went wrong');
  }
}
