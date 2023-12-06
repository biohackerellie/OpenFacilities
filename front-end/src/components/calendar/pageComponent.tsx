import React from 'react';
import SmallCalendar from './smallCalendar';

type Props = {
  facilityId: number;
};

async function getEvents(id: number) {
  'use server';
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/events/${id}`, {
    next: {
      tags: ['events'],
      revalidate: 3600,
    },
  });
  return res.json();
}

export default async function SmallCallendarComp({ facilityId }: Props) {
  const events = await getEvents(facilityId);
  const startDate = events[0].start;
  return (
    <>
      <SmallCalendar startDate={startDate} events={events} />
    </>
  );
}
