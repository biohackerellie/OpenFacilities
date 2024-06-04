import type {
  Schema$Event,
  calendars} from './types';
import {
  OnePropType,
  filterIncludes,
  EventsProps,
  EventsArray,
  ByPropertyType
} from './types';

/**
 * Higher-Order functions for processing events from Gcal
 */

const filterByOneProperty = <Schema$Event>(
  property: string,
  events: Schema$Event[]
) => events.filter((event: any) => event.r[0] == property);

const filterIncludesString = (filters: string[], str: string) =>
  filters[filters.length - 1].includes(str);

const oneTime = <calendar, events>(
  calendar: calendars,
  events: Schema$Event[] | any[]
) =>
  events
    .filter((item) => !item.recurrence)
    .map((e) => {
      // account for all day events and arbitrary time events
      const start = e?.start?.date
        ? new Date(`${e?.start?.date}T08:00:00`)
        : new Date(e?.start?.dateTime);

      const end = e?.end?.date
        ? new Date(`${e?.end?.date}T08:00:00`)
        : new Date(e?.end?.dateTime);

      return {
        eventType: calendar.name,
        creator: e.creator,
        end,
        gLink: e.htmlLink,
        description: e.description,
        location: e.location,
        start,
        title: e.summary,
        meta: e,
      };
    });

const recurring = <events>(events: Schema$Event[]) =>
  events
    .filter((item) => item.recurrence)
    //@ts-expect-error
    .map((event) => ({ e: event, r: event.recurrence[0].split(';') }));

const recurringByProperty = <events, fn, calendar, occurences>(
  events: Schema$Event[],
  fn: Function,
  calendar: calendars,
  occurences: number
) =>
  [].concat
    .apply([], events as any)
    .map((event) => fn(calendar, occurences, event));

const removeCancelled = <events>(events: Schema$Event[]) =>
  events.filter((item) => item.status != 'cancelled');

const removeRecurrenceProperty = (events: any[]) =>
  events.map((event) => event.e);

export {
  filterByOneProperty,
  filterIncludesString,
  oneTime,
  recurring,
  recurringByProperty,
  removeCancelled,
  removeRecurrenceProperty,
};
