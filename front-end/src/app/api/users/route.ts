import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, response: NextResponse) {
  const users = await prisma.user.findMany();
  console.log('users', users);

  return NextResponse.json(serializeJSON(users));
}
