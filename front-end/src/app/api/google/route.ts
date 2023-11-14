import { NextRequest, NextResponse } from 'next/server';
import { AllEventsQuery } from '@/lib/db/queries/events';
import { db } from '@/lib/db';
import { Events, type InsertEvents } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';
import { eq } from 'drizzle-orm';

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

    const databaseEvents = await AllEventsQuery.execute();
    let deleted = 0;
    let created = 0;
    let updated = 0;

    const eventsToDelete = databaseEvents
      .filter((event) => new Date(event.start || '') < oneMonthAgo)
      .map((event) => event.id);
    if (eventsToDelete.length > 0) {
      for (const event of eventsToDelete) {
        await db.delete(Events).where(eq(Events.id, event as any));
        deleted++;
      }
    }
    const placeholderEvents = databaseEvents.filter(
      (event) => event.placeholder === true
    );

    for (const eventData of events) {
      // If this event is a placeholder, update it
      if (placeholderEvents.some((e) => e.id === eventData.id)) {
        await db
          .update(Events)
          .set({
            title: eventData.title,
            start: eventData.start,
            end: eventData.end,
            facilityId: eventData.facilityId ? eventData.facilityId : null,
            placeholder: false,
          })
          .where(eq(Events.id, eventData.id));
        updated++;
      } else {
        await db.insert(Events).values({
          id: eventData.id,
          title: eventData.title,
          start: eventData.start,
          end: eventData.end,
          facilityId: eventData.facilityId ? eventData.facilityId : null,
          placeholder: false,
        });
        created++;
      }
    }

    revalidateTag('events');
    return NextResponse.json(
      {
        ok: true,
        message: `Deleted ${deleted} events, created ${created} events, and updated ${updated} events.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: error }, { status: 500 });
  }
}
