import React from 'react';
import SmallCalendar from './smallCalendar';
import getAllCalendars from '@/functions/events/googleAPI';
interface Props {
  facilityId: number;
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

export default async function SmallCallendarComp({ facilityId }: Props) {
  const events = await getEvents(facilityId);
  const startDate = events[0].start || new Date().toISOString();
  return (
    <>
      <SmallCalendar startDate={startDate} events={events} />
    </>
  );
}
