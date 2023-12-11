import React from 'react';
import CalendarMain from '@/components/calendar/Calendar';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { calendarConfig } from '@/lib/types/constants';
import getAllCalendars from '@/functions/events/googleAPI';

async function getEvents() {
  'use server';
  const data = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events', {
    // cache: 'no-store',
    next: {
      tags: ['events'],
      revalidate: 3600,
    },
  }).then((res) => res.json());
  const events = getAllCalendars(data);

  return events;
}

export default async function Page() {
  const events = await getEvents();
  console.log(events);
  return (
    <div className="space-y-7">
      <Suspense fallback={<Skeleton className="w-[1200px] h-[800]" />}>
        <CalendarMain fetchedEvents={events} />
      </Suspense>
    </div>
  );
}
