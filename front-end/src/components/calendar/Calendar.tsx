'use client';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from '../ui/alert-dialog';
import { CalendarInfo } from '../ui';
import { useTheme } from 'next-themes';
import { Button } from '../ui/buttons';
import { useSearchParams } from 'next/navigation';
import {
  buildingCalendars,
  BuildingAll,
  buildingColors,
} from '@/lib/types/constants';
import { AlertDialogAction } from '@radix-ui/react-alert-dialog';
const localizer = momentLocalizer(moment);

type Event = {
  title: string;
  start: Date;
  end: Date;
  building: any;
  Facility: {
    name: string;
    building: string;
  };
} | null;

type EventComponentProps = {
  title: string | undefined;
  start: Date;
  end: Date;
  building: any | undefined;
  facility: any | undefined;
} | null;

function EventComponent(event: Event) {
  return (
    <div
      className={`${buildingColors[event?.building]} rbc-event-label`}
      title={event?.title}
    >
      {event?.title}
    </div>
  );
}

export default function CalendarMain({
  fetchedEvents,
}: {
  fetchedEvents: Event[];
}) {
  const searchParams = useSearchParams();

  const [selectedEvent, setSelectedEvent] = useState<EventComponentProps>(null);
  const [isOpen, setIsOpen] = useState(false);

  let selectedBuilding: string | null = 'All';
  if (searchParams && searchParams.has('building')) {
    selectedBuilding = searchParams.get('building');
  }

  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';
  const calendarStyle = {
    height: 600,
    width: 1000,
    justifyContent: '',
    border: 5,
    ...(isDarkMode && {
      WebkitTextFillColor: 'white',
      WebkitTextStrokeColor: 'white',
    }),
  };

  const mappedEvents = fetchedEvents.map((event: Event) => ({
    title: event?.title,
    start: new Date(event?.start as unknown as string),
    end: new Date(event?.end as unknown as string),
    building: event?.Facility.building,
    facility: event?.Facility.name,
  }));

  const filteredEvents =
    selectedBuilding === 'All'
      ? mappedEvents
      : mappedEvents.filter(
          //@ts-expect-error
          (event: Event) => event?.building === selectedBuilding
        );

  const url = buildingCalendars[selectedBuilding as BuildingAll];

  return (
    <div className=" p-[10px]  ">
      <div className="drop-shadow-md ">
        <div className="  inline-flex ">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button>Open {selectedBuilding} Google Calendar</Button>
          </a>
          <CalendarInfo />
        </div>
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          onSelectEvent={(event) => {
            setSelectedEvent(event);
            setIsOpen(true);
          }}
          popup
          eventPropGetter={(event, start, end, isSelected) => ({
            style: {
              backgroundColor:
                buildingColors[event.building || 'Administration Building'],
            },
          })}
          startAccessor="start"
          endAccessor="end"
          style={calendarStyle}
          components={{
            // @ts-expect-error
            event: EventComponent,
          }}
        />
      </div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="text-xl font-bold mb-4">
            {selectedEvent?.title} <br />
            {selectedEvent?.building} {selectedEvent?.facility}
          </AlertDialogHeader>
          <AlertDialogDescription>
            <p className="mb-2">
              {' '}
              Starts at {selectedEvent?.start.toLocaleString()}
            </p>
            <p className="mb-4">
              {' '}
              Ends at {selectedEvent?.end.toLocaleString()}
            </p>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Button onClick={() => setSelectedEvent(null)}>Close</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
