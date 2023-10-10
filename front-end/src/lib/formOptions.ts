'use client';

import React from 'react';
import {
  useFieldArray,
  UseFormRegister,
  useFormContext,
} from 'react-hook-form';
import { IFormInput } from './types';

export const catOptions = [
  {
    value: '1',
    label:
      'Category 1 - Community groups involving LPS children and non paid adults, or LPS staff',
  },
  {
    value: '2',
    label: 'Category 2 - All community non-profit organizations and groups',
  },
  {
    value: '3',
    label:
      'Category 3 - all for-profit organizations and non-profits from outside of the community',
  },
  {
    value: 'staff',
    label:
      'LPS STAFF - Select this if you are a staff member reserving a space specifically for a LPS event',
  },
];

export const recurringOptions = [
  {
    value: 'single',
    label: 'Single or Multiple Specific Dates',
  },
  {
    value: 'reoccurring',
    label: 'Reoccurring Dates',
  },
];

export const dayOptions = [
  {
    value: 0,
    label: 'Sunday',
  },
  {
    value: 1,
    label: 'Monday',
  },
  {
    value: 2,
    label: 'Tuesday',
  },
  {
    value: 3,
    label: 'Wednesday',
  },
  {
    value: 4,
    label: 'Thursday',
  },
  {
    value: 5,
    label: 'Friday',
  },
  {
    value: 6,
    label: 'Saturday',
  },
];

export const locations = [
  { label: 'Administration Board Room', value: 1 },
  { label: 'Graff Classroom', value: 2 },
  { label: 'Graff Field', value: 3 },
  { label: 'Graff Gym', value: 4 },
  { label: 'Graff Cafeteria', value: 5 },
  { label: 'Graff Library', value: 6 },
  { label: 'LHS Auditorium', value: 7 },
  { label: 'LHS Band Room', value: 8 },
  { label: 'LHS Choir Room', value: 9 },
  { label: 'LHS Classroom-FACS', value: 10 },
  { label: 'LHS Classroom', value: 11 },
  { label: 'LHS Depot', value: 12 },
  { label: 'LHS Gym', value: 13 },
  { label: 'LHS Library', value: 14 },
  { label: 'LHS Parking Lot', value: 15 },
  { label: 'LHS Practice Field', value: 16 },
  { label: 'LMS Band Room', value: 17 },
  { label: 'LMS Classroom FACS', value: 18 },
  { label: 'LMS Classroom', value: 19 },
  { label: 'LMS Commons', value: 20 },
  { label: 'LMS Gym', value: 21 },
  { label: 'LMS Library', value: 22 },
  { label: 'LMS Mogan Field', value: 23 },
  { label: 'South Elementary Cafeteria', value: 24 },
  { label: 'South Elementary Baseball Field', value: 25 },
  { label: 'South Elementary Classroom', value: 26 },
  { label: 'Laurel Stadium', value: 27 },
  { label: 'Laurel Stadium Warming Rooms', value: 28 },
  { label: 'West Elementary Baseball Field', value: 29 },
  { label: 'West Elementary Classroom', value: 30 },
  { label: 'West Elementary Gym', value: 31 },
];

export const categoryOptions = [
  { label: 'Category 1', value: 'Category 1' },
  { label: 'Category 2', value: 'Category 2' },
  { label: 'Category 3', value: 'Category 3' },
  { label: 'LPS Staff', value: 'LPS Staff' },
];
