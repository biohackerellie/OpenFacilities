import moment from 'moment-timezone';
import type { EventProps } from '../types';

/**
 * Handles events that occur evern 'n' number of days
 * (e.g. every 2 days, every 3 days, etc.)
 */

const handleDaily = ({ calendar, recurrence, e }: EventProps) => {
  if (!e?.start || !e.end || !e.recurrence || !recurrence) return;
  const start = e.start.date ? moment(e.start.date) : moment(e.start.dateTime);

  const end = e.end.date ? moment(e.end.date) : moment(e.end.dateTime);

  // reformat response to get how many days between each recurrence
  const wtfGoogle =
    // @ts-expect-error
    e.recurrence[0].split(';').pop().split('=').pop() != 'DAILY'
      ? // @ts-expect-error
        parseInt(e.recurrence[0].split(';').pop().split('=').pop())
      : 1;

  const n = wtfGoogle;
  let add = wtfGoogle;
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
    const reoccuringEvent = {
      eventType: calendar.name,
      creator: e.creator,
      end: end.clone().add(add, 'days').toDate(),
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start.clone().add(add, 'days').toDate(),
      title: e.summary,
      meta: e,
    };
    reoccuringEvents.push(reoccuringEvent);
    recurrence--;
    add += n;
  }
  return reoccuringEvents;
};

export default handleDaily;
