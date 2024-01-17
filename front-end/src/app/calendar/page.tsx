import React from 'react';
import CalendarMain from '@/components/calendar/Calendar';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';

async function getEvents() {
  const data = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events', {
    next: {
      tags: ['events'],
      revalidate: 60,
    },
  }).then((res) => res.json());

  return data;
}

export default async function Page() {
  const events = await getEvents();

  return (
    <div className="space-y-7">
      <Suspense fallback={<LoadingScreen />}>
        <CalendarMain fetchedEvents={events} />
      </Suspense>
    </div>
  );
}
