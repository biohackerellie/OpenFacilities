import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(request: Request) {
  const res = await prisma.events.findMany({
    where: {
      placeholder: false,
    },
    include: {
      Facility: true,
    },
    cacheStrategy: { swr: 3600, ttl: 3600 },
  });

  return NextResponse.json(serializeJSON(res));
}
