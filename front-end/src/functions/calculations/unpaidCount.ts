'use server';

import type { ReservationClassType } from '@/lib/classes';
import { ReservationClass } from '@/lib/classes';

import moment from 'moment';

type ChartData = Record<string, number | string | undefined>;

export default async function WeeklyUnpaidCount({
  data,
}: {
  data: ReservationClassType[];
}) {
  let reservationCount = 0;

  let object = null;
  let cost = 0;
  const filteredData = data.filter(
    (reservation) =>
      reservation.paid === false &&
      reservation.ReservationDate?.some(
        (date) =>
          date.approved === 'approved' &&
          moment(date.startDate).isBetween(moment(), moment().add(7, 'days'))
      )
  );

  filteredData.forEach((reservation) => {
    object = new ReservationClass(reservation);

    cost = object.CostReducer();
    if (cost > 0) {
      reservationCount++;
    }
  });
  return Number(reservationCount);
}
