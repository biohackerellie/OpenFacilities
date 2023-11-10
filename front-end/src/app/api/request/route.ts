import { NextRequest, NextResponse } from 'next/server';
import { GetRequests } from '@/lib/db/queries/reservations';
import { serializeJSON } from '@/utils/serializeJSON';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const res = await GetRequests.execute();
  return NextResponse.json(serializeJSON(res));
}
