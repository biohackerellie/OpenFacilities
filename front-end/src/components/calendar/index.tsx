import React, { useCallback, useMemo, useEffect, use } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Schema$Event } from '../../functions/events/types';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import getAllCalendars from '../../functions/events/googleAPI';

type Props = {
  config: {
    calendars: {
      id: string;
      name: string;
    }[];
    api_key: string;
    dailyRecurrence: number;
    weeklyRecurrence: number;
    monthlyRecurrence: number;
  };
  style?: React.CSSProperties | undefined;
  OnSelectEvent:
    | ((
        event: {
          start: any;
        } & {
          end: any;
        },
        e: React.SyntheticEvent<HTMLElement, globalThis.Event>
      ) => void)
    | undefined;
  components?: any;
  eventPropGetter?: any;
};

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  config,
  style,
  OnSelectEvent,
  components,
  eventPropGetter,
}: Props) => {
  const [events, setEvents] = React.useState<Schema$Event[][]>([]);
  console.log(config);
  const getGoogleCalendarEvents = useCallback(() => {
    getAllCalendars(config)
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
        popup
        style={style}
        eventPropGetter={eventPropGetter}
        components={components}
        onSelectEvent={OnSelectEvent}
      />
    </div>
  );
};

export default BigCalendar;
