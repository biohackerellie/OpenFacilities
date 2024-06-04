import { calendar_v3 } from 'googleapis';
import Schema$Event = calendar_v3.Schema$Event;
import Schema$Events = calendar_v3.Schema$Events;
import { Schema } from 'zod';

interface calendars {
  name: string;
  id: string;
}

export interface EventProps {
  calendar: calendars;
  recurrence?: number;
  e: Schema$Event;
}

export interface OnePropType {
  property: string;
  events: [{}];
}

export interface filterIncludes {
  filters: string[];
  str: string;
}

export interface EventsProps {
  calendar: calendars;
  events: Schema$Event[];
  recurrence?: number;
}

export interface EventsArray {
  events: Schema$Event[];
}

export interface ByPropertyType {
  events: Schema$Event[];
  fn: Function;
  calendar: calendars;
  occurences: number;
}

export type Schema$Event = calendar_v3.Schema$Event;
