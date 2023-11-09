import { NextRequest, NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';
import { GetUsers } from '@/lib/db/queries/users';

export async function GET(request: NextRequest, response: NextResponse) {
  const users = await GetUsers.execute();
  return NextResponse.json(serializeJSON(users));
}
