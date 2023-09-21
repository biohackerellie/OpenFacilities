import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(request: Request) {
  const res = await prisma.events.findMany({
    include: {
      Facility: true,
    },
  });

  return NextResponse.json(serializeJSON(res));
}
