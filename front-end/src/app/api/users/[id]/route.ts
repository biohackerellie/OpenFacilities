import { NextResponse, NextRequest } from 'next/server';

import { GetUserById } from '@/lib/db/queries/users';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await GetUserById.execute({ id: params.id });

  return NextResponse.json(serializeJSON(res));
}
