//@ts-nocheck
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactModal from 'react-modal';
import { CalendarInfo } from '../ui';
import { Events } from '@prisma/client';
import { useTheme } from 'next-themes';
import { Button } from '../ui/buttons';
import { Separator } from '@/components/ui/separator';

const localizer = momentLocalizer(moment);

const buildingColors: any = {
  'West Elementary': 'purple',
  'South Elementary': 'blue',
  'Laurel Middle School': 'green',
  'Laurel High School': 'skyblue',
  'Graff Elementary': 'slate',
  'Administration Building': 'orange',
};

function EventComponent({ event }: { event: Events }) {
  return (
    <div
      className={`rbc-event-content ${buildingColors[event.building]}`}
      title={event.title}
    >
      {event.title}
    </div>
  );
}

export default function CalendarMain() {
  const buildingCalendars = {
    Master:
      'https://calendar.google.com/calendar/embed?src=c_a55b94eb4dd05e5dd936dd548d434d6a25c2694efe67224e3eff10205d2fb82b%40group.calendar.google.com&ctz=America%2FDenver',
    'West Elementary':
      'https://calendar.google.com/calendar/embed?src=c_0b2e2e109de17b0bfb36c10b64324c2d4ddcaa19c12998aca1cd5a77ac33e8a5%40group.calendar.google.com&ctz=America%2FDenver',
    'South Elementary':
      'https://calendar.google.com/calendar/embed?src=c_177688d95252d6bd257327592bb3802966de1b52b47c2ad4bc94232738ece835%40group.calendar.google.com&ctz=America%2FDenver',
    'Laurel Middle School':
      'https://calendar.google.com/calendar/embed?src=c_8eff489230617e6c41b5e58bc6a617df6c9cbce18e87042c2e56a2db148c5719%40group.calendar.google.com&ctz=America%2FDenver',
    'Laurel High School':
      'https://calendar.google.com/calendar/embed?src=c_01cc33d2abc19e76a8fc604964d68670ec62556b2e2b761bce275f8ede807792%40group.calendar.google.com&ctz=America%2FDenver',
    'Graff Elementary':
      'https://calendar.google.com/calendar/embed?src=c_419e3a96109d8a6a3cd718fa3583f1a105c39f9d9ecff712f2caabfb549ee2d9%40group.calendar.google.com&ctz=America%2FDenver',
    'Administration Building':
      'https://calendar.google.com/calendar/embed?src=c_1885ejmm84vl8g0pmttlucapva16e%40resource.calendar.google.com&ctz=America%2FDenver',
    'Laurel Stadium':
      'https://calendar.google.com/calendar/embed?src=c_188f41n72e9d0h33l3n96tt6jg9t6%40resource.calendar.google.com&ctz=America%2FDenver',
  };

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState('Master');
  const handleSetSelectedBuilding = (building: string) => {
    setSelectedBuilding(building);
  };
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

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events');
      const fetchedEvents = await res.json();

      setEvents(
        fetchedEvents.map((event) => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          building: event.facility.building,
          facility: event.facility.name,
        }))
      );
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedEvent]);

  const filteredEvents =
    selectedBuilding === 'Master'
      ? events
      : events.filter((event) => event.building === selectedBuilding);

  return (
    <div>
      <div className="hidden sm:visible sm:flex h-5 justify-center items-center space-x-4 text-sm">
        <div className="">
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'Master' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('Master')}
          >
            All Events
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'Graff Elementary' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('Graff Elementary')}
          >
            Graff
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'Laurel High School' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('Laurel High School')}
          >
            {' '}
            Laurel High School
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'Laurel Middle School' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('Laurel Middle School')}
          >
            Laurel Middle School
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'West Elementary' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('West Elementary')}
          >
            West Elementary
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'South Elementary' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('South Elementary')}
          >
            South Elementary
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'Administration Building'
                ? 'text-blue-500'
                : ''
            }`}
            onClick={() => handleSetSelectedBuilding('Administration Building')}
          >
            Administration Building
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button
            variant="link"
            className={`${
              selectedBuilding === 'Laurel Stadium' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleSetSelectedBuilding('Laurel Stadium')}
          >
            Laurel Stadium
          </Button>
        </div>
      </div>
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
            // className="z-0 bg-transparent  font-normal m-auto border-solid border-4 backdrop-blur-lg object-center rounded-lg max-h-auto sm:max-h-auto    text-black max-w-[1080px] dark:text-white"
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
