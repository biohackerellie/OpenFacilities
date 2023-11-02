import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export const runtime = 'edge';

export async function GET(
  request: Request,
  { params }: { params: { building: string } }
) {
  const facilityBuilding = params.building;

  const res = await prisma.facility.findMany({
    where: {
      building: {
        contains: facilityBuilding,
      },
    },
    cacheStrategy: { swr: 3600, ttl: 3600 },
  });
  return NextResponse.json(serializeJSON(res));
}
