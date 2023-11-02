import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Events } from '@prisma/client';
import { revalidateTag } from 'next/cache';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { events } = await request.json();

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const databaseEvents = await prisma.events.findMany({
      cacheStrategy: { swr: 60, ttl: 60 },
    });

    const eventsToDelete = databaseEvents
      .filter((event) => new Date(event.start || '') < oneMonthAgo)
      .map((event) => event.id);

    await prisma.events.deleteMany({
      where: {
        id: {
          in: eventsToDelete,
        },
      },
    });

    const placeholderEvents = databaseEvents.filter(
      (event) => event.placeholder === true
    );

    for (const eventData of events) {
      // If this event is a placeholder, update it
      if (placeholderEvents.some((e) => e.id === eventData.id)) {
        await prisma.events.update({
          where: { id: eventData.id },
          data: {
            title: eventData.title,
            start: eventData.start,
            end: eventData.end,
            facilityId: eventData.facilityId
              ? BigInt(eventData.facilityId)
              : null,
            placeholder: false, // Set placeholder to false now that it's updated
          },
        });
      }
    }
    revalidateTag('events');
    return NextResponse.json({ response: 200, message: 'success' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
