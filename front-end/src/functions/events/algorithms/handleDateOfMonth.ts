import moment from 'moment-timezone';
import { EventProps } from '../types';

/**
 * Handles Events that occure the same date of every month
 * (e.g. the 1st of every month, the 2nd of every month, etc.)
 */

const handleDateOfMonth = ({ calendar, recurrence, e }: EventProps) => {
  if (!e || !e.start || !e.end || !e.recurrence) return;
  const start = e.start.date ? moment(e.start.date) : moment(e.start.dateTime);
  const end = e.end.date ? moment(e.end.date) : moment(e.end.dateTime);

  let reoccuringEvents = [
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

  let add = 1;

  while (recurrence && recurrence > 0) {
    const reoccuringEvent = {
      eventType: calendar.name,
      creator: e.creator,
      end: end.clone().add(add, 'months').toDate(),
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start.clone().add(add, 'months').toDate(),
      title: e.summary,
      meta: e,
    };
    reoccuringEvents.push(reoccuringEvent);
    recurrence--;
    add += 1;
  }
  return reoccuringEvents;
};

export default handleDateOfMonth;
