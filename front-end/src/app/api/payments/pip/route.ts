import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const res = await prisma.reservation.update({
      where: {
        id: BigInt(body.id),
      },
      data: {
        inPerson: true,
      },
    });
  } catch (error) {
    return NextResponse.json({ status: 500, body: error });
  }
  return NextResponse.json({ status: 200, body: 'success' });
}
