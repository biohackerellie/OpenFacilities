import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Events } from '@prisma/client';
import { revalidateTag } from 'next/cache';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { events } = await request.json();
    const headers = request.headers;
    if (headers.get('x-api-key') !== process.env.EMAIL_API_KEY) {
      return NextResponse.json(
        { ok: false, message: 'unauthorized' },
        { status: 401 }
      );
    }
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

    let createCount = 0;

    let updateCount = 0;
    for (const eventData of events) {
      // If this event is a placeholder, update it
      const existingEvent = databaseEvents.find((e) => e.id === eventData.id);
      if (existingEvent) {
        if (existingEvent.placeholder) {
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
          updateCount++;
        }
      } else {
        // Otherwise, create it
        await prisma.events.create({
          data: {
            id: eventData.id,
            title: eventData.title,
            start: eventData.start,
            end: eventData.end,
            facilityId: eventData.facilityId
              ? BigInt(eventData.facilityId)
              : null,
            placeholder: false,
          },
        });
        createCount++;
      }
    }

    revalidateTag('events');
    return NextResponse.json(
      {
        ok: true,
        message: 'success',
        eventsUpdated: updateCount,
        eventsCreated: createCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: error }, { status: 500 });
  }
}
