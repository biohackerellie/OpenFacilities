import React from 'react';
import CalendarMain from '@/components/calendar/Calendar';

async function getEvents() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events', {
    next: {
      tags: ['events'],
    },
  });
  const events = res.json();
  return events;
}

export default async function Page() {
  const events = await getEvents();
  return (
    <div className="mt-16">
      <CalendarMain fetchedEvents={events} />
    </div>
  );
}
