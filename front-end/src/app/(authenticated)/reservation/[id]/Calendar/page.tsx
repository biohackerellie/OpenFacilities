import React from 'react';
import SmallCalendar from '@/components/calendar/smallCalendar';
import { headers } from 'next/headers';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import getAllCalendars from '@/functions/events/googleAPI';
async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
      },
    }
  );

  return res.json();
}

async function getEvents(id: number) {
  'use server';
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/events/${id}`, {
    next: {
      tags: ['events'],
      revalidate: 3600,
    },
  }).then((res) => res.json());
  const events = getAllCalendars(res);
  return events;
}

export default async function calPage({ params }: { params: { id: number } }) {
  const reservation = await getReservation(params.id);
  const facilityId = reservation.Facility.id;
  const events = await getEvents(facilityId);
  const startDate = events[0].start;
  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-lg font-medium">
          {reservation.Facility.name}Calendar
        </h3>
      </div>
      <Suspense
        fallback={
          <Skeleton className="h-[450px] w-[500px] sm:w-[700px] sm:h-[500px]" />
        }
      >
        <SmallCalendar startDate={startDate} events={events} />
      </Suspense>
    </div>
  );
}
