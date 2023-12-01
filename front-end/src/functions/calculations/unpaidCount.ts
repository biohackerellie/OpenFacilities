'use server';

import { UnPaidReservations } from '@/lib/db/queries/reservations';

export default async function WeeklyUnpaidCount() {
  let reservationCount = 0;

  const reservations = await UnPaidReservations.execute();
  for (const reservation of reservations) {
    reservationCount++;
  }

  return Number(reservationCount);
}
