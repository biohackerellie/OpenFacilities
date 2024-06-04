import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { AllEventsQuery } from '@/lib/db/queries/events';
import { db } from '@/lib/db';
import { Events  } from '@/lib/db/schema';
import type {InsertEvents} from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
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
  let failed = 0;
  let messageDetails = '';
  const eventsToDelete = databaseEvents
    .filter((event) => new Date(event.start || '') < oneMonthAgo)
    .map((event) => event.id);
  if (eventsToDelete.length > 0) {
    try {
      for (const event of eventsToDelete) {
        await db.delete(Events).where(eq(Events.id, event as any));
        deleted++;
      }
    } catch (error) {
      failed++;
      messageDetails += `Failed to delete ${error} events. `;
    }
  }
  if (events !== undefined) {
    try {
      for (const eventData of events) {
        const existingEvent = databaseEvents.find((e) => e.id === eventData.id);
        if (
          (existingEvent?.placeholder) ||
          (existingEvent && existingEvent.start === null)
        ) {
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
    } catch (error) {
      failed++;
      messageDetails += `Failed to create ${error} events. `;
    }
  }
  revalidateTag('events');
  return NextResponse.json(
    {
      ok: true,
      message: `Deleted ${deleted} events, created ${created} events, and updated ${updated} events. Failed on ${failed} events. ${messageDetails}`,
    },
    { status: 200 }
  );
}
