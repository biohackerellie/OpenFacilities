import { NextRequest, NextResponse } from 'next/server';
import { AllEventsQuery } from '@/lib/db/queries/events';
import { db } from '@/lib/db';
import { Events } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { events } = await request.json();

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const databaseEvents = await AllEventsQuery.execute();

    const eventsToDelete = databaseEvents
      .filter((event) => new Date(event.start || '') < oneMonthAgo)
      .map((event) => event.id);
    for (const event of eventsToDelete) {
      await db.delete(Events).where(eq(Events.id, event));
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
      }
    }
    revalidateTag('events');
    return NextResponse.json({ response: 200, message: 'success' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
