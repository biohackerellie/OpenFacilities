import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { AnyARecord } from 'dns';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const id = BigInt(params.id);

  const res = await prisma.events.findMany({
    where: {
      facilityId: id,
    },
    include: {
      Facility: true,
    },
  });

  return NextResponse.json(serializeJSON(res));
}
