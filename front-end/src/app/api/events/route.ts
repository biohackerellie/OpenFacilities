import { NextResponse } from 'next/server';
import { EventsQuery } from '@/lib/db/queries/events';
import { serializeJSON } from '@/utils/serializeJSON';

export const runtime = 'edge';
export async function GET(request: Request) {
  const res = await EventsQuery.execute();
  return NextResponse.json(serializeJSON(res));
}
