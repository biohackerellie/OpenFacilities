import { calendar_v3 } from 'googleapis';
import Schema$Event = calendar_v3.Schema$Event;
import Schema$Events = calendar_v3.Schema$Events;
import { Schema } from 'zod';

type calendars = {
  name: string;
  id: string;
};

export type EventProps = {
  calendar: calendars;
  recurrence?: number;
  e: Schema$Event;
};

export type OnePropType = {
  property: string;
  events: [{}];
};

export type filterIncludes = {
  filters: string[];
  str: string;
};

export type EventsProps = {
  calendar: calendars;
  events: Schema$Event[];
  recurrence?: number;
};

export type EventsArray = {
  events: Schema$Event[];
};

export type ByPropertyType = {
  events: Schema$Event[];
  fn: Function;
  calendar: calendars;
  occurences: number;
};

export type Schema$Event = calendar_v3.Schema$Event;
