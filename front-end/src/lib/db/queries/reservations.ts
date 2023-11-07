import { db } from '@/lib/db';
import {
  Reservation,
  type NewReservation,
  ReservationDate,
  type InsertReservationDate,
  Events,
  type InsertEvents,
} from '../schema';
import { eq } from 'drizzle-orm';

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

export const PostReservations = async (NReservation: any) => {
  const res = await db.insert(Reservation).values(NReservation).returning();
  const response = res[0];
  return response;
};

export const PostReservationDate = async (NReservationDate: any) => {
  const res = await db
    .insert(ReservationDate)
    .values(NReservationDate)
    .returning();
  return res;
};

export const PostEvents = async (NEvents: any) => {
  const res = await db.insert(Events).values(NEvents).returning();
  return res;
};
