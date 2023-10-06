import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(request: NextRequest, response: NextResponse) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      tos: true,
    },

    cacheStrategy: { swr: 3600, ttl: 3600 },
  });

  console.log('users', users);

  return NextResponse.json(serializeJSON(users));
}
