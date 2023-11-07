import { db } from '@/lib/db';
import { User } from '@/lib/db/schema';
import { eq, and, gte, or, sql } from 'drizzle-orm';

export const UserByEmail = db.query.User.findFirst({
  where: eq(User.email, sql.placeholder('email')),
  columns: {
    id: true,
  },
}).prepare('user_by_email');
