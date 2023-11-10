import { db } from '@/lib/db';
import { User } from '@/lib/db/schema';
import { eq, and, gte, or, sql } from 'drizzle-orm';

export const UserByEmail = db.query.User.findFirst({
  where: eq(User.email, sql.placeholder('email')),
  columns: {
    password: false,
  },
}).prepare('user_by_email');

export const GetUsers = db.query.User.findMany({
  columns: {
    password: false,
  },
}).prepare('get_users');

export const GetUserById = db.query.User.findFirst({
  where: eq(User.id, sql.placeholder('id')),
  columns: {
    password: false,
  },
  with: {
    Reservation: {
      with: {
        Facility: true,
        ReservationDate: true,
        ReservationFees: true,
        Category: true,
      },
    },
  },
}).prepare('get_user_by_id');
