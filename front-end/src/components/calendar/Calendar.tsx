'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactModal from 'react-modal';
import { CalendarInfo } from '../ui';
import BuildingFilter from './navigation/filterBar';
import { Facility } from '@/lib/db/schema';
import { useTheme } from 'next-themes';
import { Button } from '../ui/buttons';
import { useSearchParams } from 'next/navigation';

import {
  buildingCalendars,
  type BuildingCalendars,
} from '@/lib/types/calendars';
const localizer = momentLocalizer(moment);

const buildingColors: Record<string, string> = {
  'West Elementary': 'purple',
  'South Elementary': 'blue',
  'Laurel Middle School': 'green',
  'Laurel High School': 'skyblue',
  'Graff Elementary': 'slate',
  'Administration Building': 'orange',
};

type BuildingColors = keyof typeof buildingColors;
type SelectFacility = typeof Facility.$inferSelect;
type Event = {
  title: string;
  start: Date;
  end: Date;
  building: any;
  Facility: SelectFacility;
};

function EventComponent({ event }: { event: Event }) {
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

  const [selectedEvent, setSelectedEvent] = useState<Event>(null);

  const selectedBuilding: BuildingCalendars =
    (searchParams.get('building') as BuildingCalendars) || 'All';

  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';
  const calendarStyle = {
    height: 800,
    width: '100%',
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
  type MappedEvents = keyof typeof mappedEvents;

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedEvent]);

  const filteredEvents =
    selectedBuilding === 'All'
      ? mappedEvents
      : mappedEvents.filter((event) => event.building === selectedBuilding);

  return (
    <div>
      <BuildingFilter />
      <div className=" h-screen block   items-center   mx-auto p-[10px]  align-center  ">
        <div className="drop-shadow-md ">
          <div className=" flex justify-center   ">
            <a
              href={buildingCalendars[selectedBuilding]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Open {selectedBuilding} Google Calendar</Button>
            </a>
            <CalendarInfo />
          </div>
          <Calendar
            localizer={localizer}
            //@ts-expect-error
            events={filteredEvents}
            onSelectEvent={(event) => setSelectedEvent(event)}
            popup
            eventPropGetter={(event, start, end, isSelected) => ({
              style: {
                backgroundColor: buildingColors[event.building],
              },
            })}
            startAccessor="start"
            endAccessor="end"
            style={calendarStyle}
            components={{
              event: EventComponent,
            }}
          />
        </div>
        <div className="items-center align-middle justify-center drop-shadow-md">
          <ReactModal
            isOpen={!!selectedEvent}
            onRequestClose={() => setSelectedEvent(null)}
            className="fixed inset-0 flex items-center text-black dark:text-black justify-center z-50 transition-opacity ease-out duration-500"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
          >
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">{selectedEvent?.title}</h3>
              <h4 className="text-lg mb-2">{selectedEvent?.building}</h4>

              <h4 className="text-lg mb-2">{selectedEvent?.facility}</h4>
              <p className="mb-2">
                {' '}
                Starts at {selectedEvent?.start.toLocaleString()}
              </p>
              <p className="mb-4">
                {' '}
                Ends at {selectedEvent?.end.toLocaleString()}
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </ReactModal>
        </div>
      </div>
    </div>
  );
}
