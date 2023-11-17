import { NextResponse, NextRequest } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';
import { GetReservationbyID } from '@/lib/db/queries/reservations';
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: Number } }
) {
  console.log('request hit');
  const res = await GetReservationbyID.execute({ id: params.id });
  return NextResponse.json(serializeJSON(res));
}
