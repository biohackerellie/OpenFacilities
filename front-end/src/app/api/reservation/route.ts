import { NextResponse } from 'next/server';
import { GetReservations } from '@/lib/db/queries/reservations';

import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(req: Request) {
  const res = await GetReservations.execute();
  return NextResponse.json(serializeJSON(res));
}
