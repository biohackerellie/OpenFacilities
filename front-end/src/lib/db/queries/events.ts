import { db } from '@/lib/db';
import { Events } from '@/lib/db/schema';
import { eq, sql, and } from 'drizzle-orm';

export const EventsQuery = db.query.Events.findMany({
  where: eq(Events.placeholder, false),
  with: {
    Facility: true,
  },
}).prepare('events');

export const AllEventsQuery = db.query.Events.findMany({
  with: {
    Facility: true,
  },
}).prepare('allEvents');

export const EventsByFacilityIdQuery = db.query.Events.findMany({
  where: and(
    eq(Events.facilityId, sql.placeholder('facilityId')),
    eq(Events.placeholder, false)
  ),
  with: {
    Facility: true,
  },
}).prepare('eventsByFacilityId');
