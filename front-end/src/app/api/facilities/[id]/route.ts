import { NextResponse } from 'next/server';

import { serializeJSON } from '@/utils/serializeJSON';
import { FacilityQuery } from '@/lib/db/queries/facility';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const res = await FacilityQuery.execute({ id: id });
  return NextResponse.json(serializeJSON(res));
}
