import { db } from '@/lib/db';
import { Events, Facility } from '@/lib/db/schema';
import { eq, sql, and, gte, lt, asc } from 'drizzle-orm';

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

export const SortedEventsQuery = db.query.Events.findMany({
  where: and(
    eq(Events.placeholder, false),
    eq(Facility.building, sql.placeholder('building')),
    gte(Events.start, sql.placeholder('start')),
    lt(Events.start, sql.placeholder('end'))
  ),
  with: {
    Facility: true,
  },
  orderBy: [asc(Events.start)],
}).prepare('sortedEvents');
