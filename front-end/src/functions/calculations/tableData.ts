'use server';
import { Category, SelectFacility } from '@/lib/db/schema';
import type {
  Reservation,
  TableReservation,
  FacilityWithCategory,
  TableFacility} from '@/lib/types';
import {
  ReservationDate,
  DateType
} from '@/lib/types';

import moment from 'moment';

const dateOptions = {};

async function mapRequests(requests: Reservation[]) {
  const mappedRequests: TableReservation[] = requests.map((requests) => {
    const sortedDates = requests.ReservationDate.sort((a, b) =>
      moment(a.startDate).diff(moment(b.startDate))
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
  const currentDate = moment();

  const mappedReservations: any[] = Reservations.map((reservation) => {
    const sortedDates = reservation.ReservationDate.sort((a, b) =>
      moment(a.startDate, 'YYYY-MM-DD').diff(moment(b.startDate, 'YYYY-MM-DD'))
    );
    const nextUpcomingDate = sortedDates?.find(
      (date) => moment(date.startDate, 'YYYY-MM-DD') >= currentDate
    );
    if (nextUpcomingDate) {
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate.startDate,
        approved: reservation.approved,
        User: reservation.User?.name || '',
        Details: reservation.id,
      };
    }
    return null;
  }).filter((reservation) => reservation !== null);
  return mappedReservations as TableReservation[];
}

async function mapPastReservations(Reservations: Reservation[]) {
  const currentDate = moment();
  const mappedReservations: any[] = Reservations.map((reservation) => {
    const sortedDates = reservation.ReservationDate.sort((a, b) =>
      moment(a.startDate, 'YYYY-MM-DD').diff(moment(b.startDate, 'YYYY-MM-DD'))
    );

    const nextUpcomingDate = sortedDates?.find(
      (date) => moment(date.startDate, 'YYYY-MM-DD') >= currentDate
    );
    const reservationDate = reservation.ReservationDate.map(
      (date) => date.startDate
    );
    if (!nextUpcomingDate) {
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: reservationDate[0],
        approved: reservation.approved,
        User: reservation.User?.name || '',
        Details: reservation.id,
      };
    }
    return null;
  }).filter((reservation) => reservation !== null);
  return mappedReservations as TableReservation[];
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
  const currentDate = moment();
  const mappedReservations: TableReservation[] = Reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort((a, b) =>
        moment(a.startDate).diff(moment(b.startDate))
      );
      const nextUpcomingDate = sortedDates?.find(
        (date) => moment(date.startDate) >= currentDate
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

async function mapFacilityTable(facilities: FacilityWithCategory[]) {
  const mappedFacilities = facilities
    .map((facility) => {
      return {
        id: facility.id,
        name: facility.name,
        building: facility.building,
        address: facility.address,
        imagePath: facility.imagePath,
        capacity: facility.capacity,
        googleCalendarId: facility.googleCalendarId,
        Category: facility.Category?.map((category) => category.price),
      };
    })
    .flat();
  return mappedFacilities as TableFacility[];
}

export {
  mapRequests,
  mapReservations,
  mapDates,
  userReservations,
  mappedFacilities,
  mapFacilityTable,
  mapPastReservations,
};
