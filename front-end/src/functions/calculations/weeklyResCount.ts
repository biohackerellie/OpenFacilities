'use server';

import { ReservationCountThisWeek } from '@/lib/db/queries/reservations';

export default async function WeeklyCount() {
  let reservationCount = 0;

  const reservations = await ReservationCountThisWeek.execute();
  for (const reservation of reservations) {
    reservationCount++;
  }

  return Number(reservationCount);
}
