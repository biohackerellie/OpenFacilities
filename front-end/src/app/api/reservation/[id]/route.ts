import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
import { GetReservationbyID } from '@/lib/db/queries/reservations';
export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const res = await GetReservationbyID.execute({ id: BigInt(id) });
  return NextResponse.json(serializeJSON(res));
}
