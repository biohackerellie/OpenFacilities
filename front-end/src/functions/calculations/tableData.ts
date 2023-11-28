'use server';
import { SelectFacility } from '@/lib/db/schema';
import {
  Reservation,
  TableReservation,
  ReservationDate,
  DateType,
  FacilityWithCategory,
} from '@/lib/types';

import moment from 'moment';

const dateOptions = {};

async function mapRequests(requests: Reservation[]) {
  const mappedRequests: TableReservation[] = requests.map((requests) => {
    const sortedDates = requests.ReservationDate.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
    return {
      eventName: requests.eventName,
      Facility: requests.Facility.name,

      ReservationDate: sortedDates[0]?.startDate || 'No Dates Defined',

      approved: requests.approved,
      User: requests.User?.name || '',
      Details: requests.id,
    };
  });
  return mappedRequests;
}

async function mapReservations(Reservations: Reservation[]) {
  const currentDate = new Date();
  const mappedReservations: TableReservation[] = Reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
      const nextUpcomingDate = sortedDates?.find(
        (date) => new Date(date.startDate).getTime() >= currentDate.getTime()
      );

      const mostRecentPastDate =
        !nextUpcomingDate && sortedDates.length > 0
          ? sortedDates[sortedDates.length - 1]
          : 'No Dates Defined';
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate
          ? nextUpcomingDate.startDate
          : mostRecentPastDate?.startDate,
        approved: reservation.approved,
        User: reservation.User?.name || '',
        Details: reservation.id,
      };
    }
  );
  return mappedReservations;
}

async function mapDates(ReservationDates: any[]) {
  const mappedDates = ReservationDates.map((date) => {
    return {
      Options: Number(date.id),
      startDate: date.startDate,
      endDate: date.endDate,
      startTime: date.startTime,
      endTime: date.endTime,
      approved: date.approved,
      ReservationID: Number(date.reservationId),
    };
  });
  return mappedDates;
}

async function userReservations(Reservations: Reservation[]) {
  const currentDate = new Date();
  const mappedReservations: TableReservation[] = Reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
      const nextUpcomingDate = sortedDates?.find(
        (date) => new Date(date.startDate).getTime() >= currentDate.getTime()
      );

      const mostRecentPastDate =
        !nextUpcomingDate && sortedDates.length > 0
          ? sortedDates[sortedDates.length - 1]
          : 'No Dates Defined';
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate
          ? nextUpcomingDate.startDate
          : mostRecentPastDate?.startDate,
        approved: reservation.approved,
        Details: reservation.id,
      };
    }
  );
  return mappedReservations;
}

async function mappedFacilities(facilities: FacilityWithCategory[]) {
  const mappedFacilities = facilities.map((facility) => {
    return {
      id: facility.id,
      name: facility.name,
      building: facility.building,
      address: facility.address,
      imagePath: facility.imagePath,
      capacity: facility.capacity,
      googleCalendarId: facility.googleCalendarId,
      Category: [facility.Category],
    } as const;
  });
  return mappedFacilities;
}

export {
  mapRequests,
  mapReservations,
  mapDates,
  userReservations,
  mappedFacilities,
};
