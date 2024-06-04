import moment from 'moment-timezone';
import type { EventProps } from '../types';

/**
 * Handles events that occur the same day of the week
 * (e.g. every Monday, every Tuesday, etc.)
 */

const handleWeekly = ({ calendar, recurrence, e }: EventProps) => {
  if (!e?.start || !e.end || !e.recurrence) return;
  const start = e.start.date ? moment(e.start.date) : moment(e.start.dateTime);
  const end = e.end.date ? moment(e.end.date) : moment(e.end.dateTime);

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

  let add = 1;

  while (recurrence && recurrence > 0) {
    const reoccuringEvent = {
      eventType: calendar.name,
      creator: e.creator,
      end: end.clone().add(add, 'weeks').toDate(),
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start.clone().add(add, 'weeks').toDate(),
      title: e.summary,
      meta: e,
    };
    reoccuringEvents.push(reoccuringEvent);
    recurrence--;
    add += 1;
  }
  return reoccuringEvents;
};

export default handleWeekly;
