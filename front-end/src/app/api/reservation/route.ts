import { NextResponse } from 'next/server';
import { GetReservations } from '@/lib/db/queries/reservations';

import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(req: Request) {
  if (req.headers.get('x-api-key') !== process.env.EMAIL_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const res = await GetReservations.execute();
  return NextResponse.json(serializeJSON(res));
}
