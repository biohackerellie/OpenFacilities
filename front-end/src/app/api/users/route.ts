import { NextRequest, NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';
import { GetUsers } from '@/lib/db/queries/users';

export async function GET(request: NextRequest, response: NextResponse) {
  if (request.headers.get('x-api-key') !== process.env.EMAIL_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const users = await GetUsers.execute();
  return NextResponse.json(serializeJSON(users));
}
