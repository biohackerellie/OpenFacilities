import { db } from '@/lib/db';
import { Reservation, ReservationDate, Facility, Category } from '../schema';
import { eq, sql, and, gte, or, lte, like } from 'drizzle-orm';
import moment from 'moment';

const currentDate = moment();
const sevenDaysFromNow = moment().add(7, 'days');

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
    ReservationDate: {
      where: gte(ReservationDate.startDate, currentDate.format('YYYY-MM-DD')),
    },
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

export const GetAllReservations = db.query.Reservation.findMany({
  with: {
    ReservationDate: true,
    Facility: true,
    Category: true,
    User: {
      columns: {
        password: false,
      },
    },
  },
  where: or(
    eq(Reservation.approved, 'approved'),
    eq(Reservation.approved, 'pending')
  ),
}).prepare('allReservations');

export const ReservationCountThisWeek = db.query.ReservationDate.findMany({
  where: and(
    gte(ReservationDate.startDate, currentDate.format('YYYY-MM-DD')),
    lte(ReservationDate.startDate, sevenDaysFromNow.format('YYYY-MM-DD')),
    eq(ReservationDate.approved, 'approved')
  ),
}).prepare('reservationCountThisWeek');

export const UnPaidReservations = db.query.Reservation.findMany({
  where: and(
    or(
      eq(Reservation.approved, 'approved'),
      eq(Reservation.approved, 'pending')
    ),
    eq(Reservation.paid, false),
    or(like(Category.name, '%Category 2%'), like(Category.name, '%Category 3%'))
  ),
  with: {
    ReservationDate: true,
    Facility: true,
    Category: true,
    User: {
      columns: {
        password: false,
      },
    },
  },
}).prepare('unPaidReservations');
