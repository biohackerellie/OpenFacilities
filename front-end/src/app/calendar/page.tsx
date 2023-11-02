import React from 'react';
import CalendarMain from '@/components/calendar/Calendar';
import prisma from '@/lib/prisma';
import { Events, Facility } from '@prisma/client';

// export const runtime = 'edge'

interface extendedEvent extends Events {
  Facility: Facility;
}

async function getEvents() {
  'use server';
  const events = await prisma.events.findMany({
    where: {
      placeholder: false,
    },
    include: {
      Facility: true,
    },

    cacheStrategy: { swr: 3600, ttl: 3600 },
  });
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
