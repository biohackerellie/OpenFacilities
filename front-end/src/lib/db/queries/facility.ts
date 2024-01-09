import { db } from '@/lib/db';
import { Facility, Reservation, Events } from '@/lib/db/schema';
import { eq, and, gte, or, sql, like } from 'drizzle-orm';

const today = new Date().toISOString();

export const FacilityQuery = db.query.Facility.findFirst({
  where: eq(Facility.id, sql.placeholder('id')),
  with: {
    Category: true,
    Reservation: true,
    Events: {
      where: and(gte(Events.start, today), or(gte(Events.end, today))),
    },
  },
}).prepare('single_Facility');

export const BuildingQuery = db.query.Facility.findMany({
  where: eq(Facility.building, sql.placeholder('building')),
}).prepare('building_Facility');

export const BuildingnameQuery = db.query.Facility.findFirst({
  where: like(Facility.building, sql.placeholder('building')),
}).prepare('buildingname_Facility');

export const AllFacilitiesQuery = db.query.Facility.findMany({
  with: {
    Category: true,
  },
}).prepare('all_Facility');
