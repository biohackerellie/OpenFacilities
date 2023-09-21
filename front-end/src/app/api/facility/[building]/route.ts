import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

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
  });
  return NextResponse.json(serializeJSON(res));
}
