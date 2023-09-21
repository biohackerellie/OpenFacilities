import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);

  const res = await prisma.facility.findUnique({
    where: { id },
    include: {
      category: true,
      reservation: true,
      events: {
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
  return NextResponse.json(res);
}
