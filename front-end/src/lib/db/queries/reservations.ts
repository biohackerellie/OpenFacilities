import { db } from '@/lib/db';
import { Reservation, ReservationDate, Facility, Category } from '../schema';
import { eq, sql, and } from 'drizzle-orm';

export const GetRequests = db.query.Reservation.findMany({
  where: eq(Reservation.approved, 'pending'),
  with: {
    Facility: true,
    ReservationDate: true,
    User: {
      columns: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        tos: true,
      },
    },
  },
}).prepare('requests');

export const GetReservations = db.query.Reservation.findMany({
  where: eq(Reservation.approved, 'approved'),
  with: {
    Facility: true,
    ReservationDate: true,
    Category: true,
    User: {
      columns: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        tos: true,
      },
    },
  },
}).prepare('reservations');

export const GetReservationbyID = db.query.Reservation.findFirst({
  where: eq(Reservation.id, sql.placeholder('id')),
  with: {
    Facility: true,
    ReservationDate: true,
    ReservationFees: true,
    Category: true,
    User: {
      columns: {
        password: false,
      },
    },
  },
}).prepare('reservationByID');

export const GetApprovedDates = db.query.ReservationDate.findMany({
  where: and(
    eq(ReservationDate.approved, 'approved'),
    eq(ReservationDate.reservationId, sql.placeholder('reservationId'))
  ),
  with: {
    Reservation: {
      with: {
        Facility: true,
      },
    },
  },
}).prepare('approvedDates');

export const GetDateByID = db.query.ReservationDate.findFirst({
  where: eq(ReservationDate.id, sql.placeholder('id')),
  with: {
    Reservation: {
      with: {
        Facility: true,
      },
    },
  },
}).prepare('dateByID');
