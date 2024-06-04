'use server';

import type { Schema$Event } from './types';
import {
  handleDaily,
  handleDateOfMonth,
  handleDayOfMonth,
  handleWeekly,
} from './algorithms';

import {
  filterByOneProperty,
  filterIncludesString,
  oneTime,
  recurring,
  recurringByProperty,
  removeCancelled,
  removeRecurrenceProperty,
} from './functions';

import { calendarConfig } from '@/lib/types/constants';

Object.defineProperty(Array.prototype, 'flat', {
  value: function (depth = 1) {
    return this.reduce(function (flat: string, toFlatten: any) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  },
});

export default async function getAllCalendars(items: any[]) {
  /**
   * Get events from all calendars specified and created specified number of recurring events
   */

  const config = calendarConfig;
  const calendar = calendarConfig.calendars[0];
  const events = removeCancelled(items);
  const oneTimeEvents = oneTime(calendar, events) as Schema$Event[];
  const recurringEvents = recurring(events);

  const daily = filterByOneProperty('RRULE:FREQ=DAILY', recurringEvents);
  const recurringDaily = recurringByProperty(
    removeRecurrenceProperty(daily),
    handleDaily,
    calendar,
    config.dailyRecurrence
  ).flat();

  const weekly = filterByOneProperty('RRULE:FREQ=WEEKLY', recurringEvents);
  const recurringWeekly = recurringByProperty(
    removeRecurrenceProperty(weekly),
    handleWeekly,
    calendar,
    config.weeklyRecurrence
  ).flat();

  const monthly = filterByOneProperty('RRULE:FREQ=MONTHLY', recurringEvents);
  const dateOfMonth = monthly.filter((item) =>
    filterIncludesString(item.r, 'TH')
  );
  const dayOfMonth = monthly.filter(
    (item) => !filterIncludesString(item.r, 'TH')
  );

  const recurringDateOfMonth = recurringByProperty(
    removeRecurrenceProperty(dateOfMonth),
    handleDateOfMonth,
    calendar,
    config.monthlyRecurrence
  ).flat();

  const recurringDayOfMonth = recurringByProperty(
    removeRecurrenceProperty(dayOfMonth),
    handleDayOfMonth,
    calendar,
    config.monthlyRecurrence
  ).flat();

  const allEvents = ([] as Schema$Event[]).concat(
    oneTimeEvents,
    recurringDaily,
    recurringWeekly,
    recurringDateOfMonth,
    recurringDayOfMonth
  );
  return allEvents.flat();
}
