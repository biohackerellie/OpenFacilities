'use server';
import { Reservation, TableReservation } from '@/lib/types';
import moment from 'moment';

async function mapRequests(requests: Reservation[]) {
  const mappedRequests: TableReservation[] = requests.map((requests) => {
    const sortedDates = requests.ReservationDate.sort((a, b) =>
      moment(a.startDate).diff(moment(b.startDate))
    );
    return {
      eventName: requests.eventName,
      Facility: requests.Facility.name,

      ReservationDate: sortedDates[0]?.startDate,

      approved: requests.approved,
      User: requests.User?.name || '',
      Details: requests.id,
    };
  });
  return mappedRequests;
}

async function mapReservations(Reservations: Reservation[]) {
  const currentDate = moment().format('YYYY-MM-DD');
  const mappedReservations: TableReservation[] = Reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort((a, b) =>
        moment(a.startDate).diff(moment(b.startDate))
      );
      const nextUpcomingDate = sortedDates?.find((date) =>
        moment(date.startDate).isSameOrAfter(currentDate)
      );
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate ? nextUpcomingDate?.startDate : 'N/A',
        approved: reservation.approved,
        User: reservation.User?.name || '',
        Details: reservation.id,
      };
    }
  );
  return mappedReservations;
}
export { mapRequests, mapReservations };
