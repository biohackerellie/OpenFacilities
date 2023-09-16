import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { AnyARecord } from 'dns';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const id = parseInt(params.id);

  const res = await prisma.events.findMany({
    where: {
      facilityId: id,
    },
    include: {
      facility: true,
    },
  });

  return NextResponse.json(res);
}
