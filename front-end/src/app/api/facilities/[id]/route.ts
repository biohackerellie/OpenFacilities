import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);

  const res = await prisma.facility.findUnique({
    where: { id },
    include: {
      Category: true,
      Reservation: true,
      Events: {
        where: {
          AND: [
            {
              start: {
                gte: new Date(),
              },
            },
            {
              OR: [
                {
                  end: null,
                },
                {
                  end: {
                    gte: new Date(),
                  },
                },
              ],
            },
          ],
        },
      },
    },
  });
  return NextResponse.json(serializeJSON(res));
}
