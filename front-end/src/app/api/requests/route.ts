import { NextResponse } from 'next/server';
import { getRequests } from '@/functions/data/requests';

import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(req: Request) {
  const res = await getRequests();
  return NextResponse.json(serializeJSON(res));
}
