'use client';
import React, { useEffect, useState, useRef, Key } from 'react';
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
  BuildingAll,
  buildingColors,
} from '@/lib/types/constants';
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

  const [selectedEvent, setSelectedEvent] = useState<Event>(null);

  const selectedBuilding = searchParams.get('building') || 'All';

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
          //@ts-expect-error , this component was not made with ts in mind
          onSelectEvent={(event) => setSelectedEvent(event)}
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
            {/* @ts-expect-error */}
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
  );
}
