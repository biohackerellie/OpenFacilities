'use server';

import { UnPaidReservations } from '@/lib/db/queries/reservations';

export default async function WeeklyUnpaidCount() {
  let reservationCount = 0;

  const reservations = await UnPaidReservations.execute();
  for (const reservation of reservations) {
    if (
      reservation.Reservation.Category.price > 0 &&
      reservation.approved === 'approved' &&
      reservation.Reservation.paid === false
    ) {
      reservationCount++;
    }
  }
  return Number(reservationCount);
}
