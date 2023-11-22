import React from 'react';
import CalendarMain from '@/components/calendar/Calendar';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function getEvents() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events', {
    next: {
      tags: ['events'],
      revalidate: 3600,
    },
  });
  const events = res.json();
  return events;
}

export default async function Page() {
  const events = await getEvents();
  return (
    <div className="mt-16 justify-center flex">
      <Suspense fallback={<Skeleton className="w-[1200px] h-[800]" />}>
        <CalendarMain fetchedEvents={events} />
      </Suspense>
    </div>
  );
}
