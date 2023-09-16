import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, response: NextResponse) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}
