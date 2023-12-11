//@ts-nocheck
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { Schema$Event } from '@/functions/events/types';
import { useTheme } from 'next-themes';

const localizer = momentLocalizer(moment);

interface Props {
  events: any[];
  startDate: any;
}

interface DateProps {
  startDate: Date;
}

export default function SmallCalendar({ events, startDate }: Props) {
  const mappedEvents = events.map((event: Schema$Event) => {
    if (!event?.location) return null;
    let facility = (event.location as string).split('-')[0] || 'Event';
    return {
      title: event?.title || 'Event',
      start: new Date(event?.start as unknown as string),
      end: new Date(event?.end as unknown as string),
      building: facility,
    };
  });

  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';
  const calendarStyle = {
    height: 450,
    width: 500,
    border: 2,
    ...(isDarkMode && {
      WebkitTextFillColor: 'white',
      WebkitTextStrokeColor: 'white',
    }),
  };

  const [selectedEvent, setSelectedEvent] = useState(null);
  const views = {
    month: true,
    week: false,
    day: false,
    agenda: false,
  };

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedEvent]);

  return (
    <>
      <div className="max-w-[550px] float-left mr-10  h-35 max-h-35 p-3 mb-10">
        <Calendar
          views={views}
          localizer={localizer}
          events={mappedEvents}
          onSelectEvent={(event) => setSelectedEvent(event)}
          popup
          startAccessor="start"
          // className="z-0 bg-white max-w-[480px] sm:max-w-2xl font-normal border-solid rounded-lg dark:bg-white-200 text-black dark:text-black"
          endAccessor="end"
          style={calendarStyle}
        />
      </div>
      <div className="items-center align-middle justify-center drop-shadow-md">
        <Modal
          isOpen={!!selectedEvent}
          onRequestClose={() => setSelectedEvent(null)}
          className="fixed inset-0 flex items-center text-black dark:text-black justify-center z-50 transition-opacity ease-out duration-500"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        >
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">{selectedEvent?.title}</h3>
            <h4 className="text-lg mb-2">{selectedEvent?.building}</h4>

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
        </Modal>
      </div>
    </>
  );
}
