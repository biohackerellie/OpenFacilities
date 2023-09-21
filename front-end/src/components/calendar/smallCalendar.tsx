//@ts-nocheck
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { events } from '@prisma/client';
import { useTheme } from 'next-themes';

const localizer = momentLocalizer(moment);

interface Props {
  facilityid: number;
  startdate: Date;
}

interface DateProps {
  startdate: Date;
}

export default function SmallCalendar({ facilityid, startdate }: Props) {
  const [events, setevents] = useState([]);

  useEffect(() => {
    const fetchevents = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + `/api/events/${facilityid}`,
        { next: { tags: ['events'] } }
      );
      const fetchedevents = await res.json();

      setevents(
        fetchedevents.map((event) => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          building: event.facility.building,
          facility: event.facility.name,
        }))
      );
    };
    fetchevents();
  }, []);

  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';
  const calendarStyle = {
    height: 450,
    width: 600,
    border: 5,
    ...(isDarkMode && {
      WebkitTextFillColor: 'white',
      WebkitTextStrokeColor: 'white',
    }),
  };

  const [selectedevent, setSelectedevent] = useState(null);
  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(startdate),
      views: {
        month: true,
        week: false,
        day: false,
        agenda: false,
      },
    }),
    [startdate]
  );

  useEffect(() => {
    if (selectedevent) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedevent]);

  return (
    <>
      <div className="flex  h-35 max-h-35 p-3 mb-10">
        <Calendar
          defaultDate={defaultDate}
          views={views}
          localizer={localizer}
          events={events}
          onSelectevent={(event) => setSelectedevent(event)}
          popup
          startAccessor="start"
          // className="z-0 bg-white max-w-[480px] sm:max-w-2xl font-normal border-solid rounded-lg dark:bg-white-200 text-black dark:text-black"
          endAccessor="end"
          style={calendarStyle}
        />
      </div>
      <div className="items-center align-middle justify-center drop-shadow-md">
        <Modal
          isOpen={!!selectedevent}
          onRequestClose={() => setSelectedevent(null)}
          className="fixed inset-0 flex items-center text-black dark:text-black justify-center z-50 transition-opacity ease-out duration-500"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        >
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">{selectedevent?.title}</h3>
            <h4 className="text-lg mb-2">{selectedevent?.building}</h4>
            <h4 className="text-lg mb-2">{selectedevent?.facility}</h4>
            <p className="mb-2">
              {' '}
              Starts at {selectedevent?.start.toLocaleString()}
            </p>
            <p className="mb-4">
              {' '}
              Ends at {selectedevent?.end.toLocaleString()}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedevent(null)}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}
