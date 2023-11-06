import { NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';
import { BuildingQuery } from '@/lib/db/queries/facility';

export async function GET(
  request: Request,
  { params }: { params: { building: string } }
) {
  const facilityBuilding = params.building;
  const res = await BuildingQuery.execute({ building: facilityBuilding });
  return NextResponse.json(serializeJSON(res));
}
