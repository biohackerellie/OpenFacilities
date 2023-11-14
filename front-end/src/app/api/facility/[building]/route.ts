import { NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';
import { BuildingQuery } from '@/lib/db/queries/facility';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { Facility } from '@/lib/db/schema';

export async function GET(
  request: Request,
  { params }: { params: { building: string } }
) {
  const facilityBuilding = params.building;
  const res = await db.query.Facility.findMany({
    where: eq(Facility.building, facilityBuilding),
  });
  return NextResponse.json(serializeJSON(res));
}
