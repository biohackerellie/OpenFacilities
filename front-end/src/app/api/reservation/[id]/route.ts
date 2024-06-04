import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';
import { GetReservationbyID } from '@/lib/db/queries/reservations';
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const res = await GetReservationbyID.execute({ id: params.id });
  return NextResponse.json(serializeJSON(res));
}
