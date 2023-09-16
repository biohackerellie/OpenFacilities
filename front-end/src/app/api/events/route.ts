import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const res = await prisma.events.findMany({
    include: {
      facility: true,
    },
  });

  return NextResponse.json(res);
}
