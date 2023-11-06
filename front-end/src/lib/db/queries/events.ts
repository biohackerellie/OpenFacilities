import { db } from '@/lib/db';
import { Events } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export const EventsQuery = db.query.Events.findMany({
  where: eq(Events.placeholder, false),
  with: {
    Facility: true,
  },
}).prepare('events');
