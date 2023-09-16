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
