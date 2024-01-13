import React from 'react';
import CalendarMain from '@/components/calendar/Calendar';
import { ParamParser } from '@/lib/paramParser';

type PageProps = {
  searchParams: {
    building?: string;
  };
};

async function getEvents() {
  'use server';
  const data = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events', {
    next: {
      tags: ['events'],
      revalidate: 3600,
    },
  }).then((res) => res.json());

  return data;
}

export default async function Page({ searchParams }: PageProps) {
  const events = await getEvents();
  const selectedBuilding = ParamParser.parseServerSide(searchParams.building);

  return (
    <div className="space-y-7">
      <CalendarMain fetchedEvents={events} building={selectedBuilding} />
    </div>
  );
}
