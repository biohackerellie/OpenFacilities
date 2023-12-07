import React, { useCallback, useMemo, useEffect, use } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Schema$Event } from './events/types';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import googleAPI from './events/googleAPI';

type Props = {
  config: {
    calendars: [
      {
        id: string;
        name: string;
      }
    ];
    api_key: string;
    dailyRecurrence: number;
    weeklyRecurrence: number;
    monthlyRecurrence: number;
  };
  style?: <Record>([key, string]: any) => Record;
  OnSelectEvent:
    | ((
        event: {
          title: string | undefined;
          start: Date;
          end: Date;
          building: string | undefined;
          facility: string | undefined;
        },
        e: React.SyntheticEvent<HTMLElement, globalThis.Event>
      ) => void)
    | undefined;
};

const localizer = momentLocalizer(moment);

const BigCalendar = ({ props }: { props: Props }) => {
  const [events, setEvents] = React.useState<Schema$Event[][]>([]);

  const getGoogleCalendarEvents = useCallback(() => {
    googleAPI
      .getAllCalendars(props.config)
      .then((events) => {
        setEvents(events);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    getGoogleCalendarEvents();
  }, [getGoogleCalendarEvents]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events as any}
        style={{ height: '100vh' }}
        onSelectEvent={props.OnSelectEvent}
      />
    </div>
  );
};

export default BigCalendar;
