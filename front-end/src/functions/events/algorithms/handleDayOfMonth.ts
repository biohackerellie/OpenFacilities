import moment from 'moment-timezone';
import type { EventProps } from '../types';

/**
 * Handles events that occur the same day of the month
 * (e.g. first Friday, second Tuesday, etc.)
 */

const handleDayOfMonth = ({ calendar, recurrence, e }: EventProps) => {
  if (!e?.start || !e.end || !e.recurrence) return;
  const start = e.start.date ? moment(e.start.date) : moment(e.start.dateTime);
  const end = e.end.date ? moment(e.end.date) : moment(e.end.dateTime);

  const day = start.day();
  const date = start.date();
  let counter = 0;

  if (date <= 7) {
    counter = 1;
  } else if (date > 7 && date <= 14) {
    counter = 7;
  } else if (date > 14 && date <= 21) {
    counter = 14;
  } else if (date > 21 && date <= 28) {
    counter = 21;
  } else if (date > 28 && date <= 31) {
    counter = 28;
  }

  const reoccuringEvents = [
    {
      eventType: calendar.name,
      creator: e.creator,
      end: end.toDate(),
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start.toDate(),
      title: e.summary,
      meta: e,
    },
  ];

  while (recurrence && recurrence > 0) {
    let tempCounter = counter;
    let nextStart = new Date(
      start.year(),
      start.month() + recurrence,
      tempCounter,
      start.hour(),
      start.minutes()
    );
    let nextEnd = new Date(
      end.year(),
      end.month() + recurrence,
      tempCounter,
      end.hour(),
      end.minutes()
    );

    while (tempCounter < 31) {
      const isEqual = nextStart.getDay() == start.day();

      if (isEqual) {
        const reoccuringEvent = {
          eventType: calendar.name,
          creator: e.creator,
          end: nextEnd,
          gLink: e.htmlLink,
          description: e.description,
          location: e.location,
          start: nextStart,
          title: e.summary,
          meta: e,
        };
        reoccuringEvents.push(reoccuringEvent);
        tempCounter = counter;
        break;
      }

      nextStart = new Date(
        start.year(),
        start.month() + recurrence,
        tempCounter,
        start.hour(),
        start.minutes()
      );
      nextEnd = new Date(
        end.year(),
        end.month() + recurrence,
        tempCounter,
        end.hour(),
        end.minutes()
      );
    }
    recurrence--;
  }
  return reoccuringEvents;
};

export default handleDayOfMonth;
