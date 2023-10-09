import * as z from 'zod';

export const formSchema = z.object({
  eventName: z.string().min(3, {
    message: 'Event name must be at least 3 characters',
  }),
  Category: z.object({
    label: z.string(),
    value: z.number(),
  }),
  name: z.string().nonempty({ message: 'Name is required' }),
  phone: z.string().nonempty({ message: 'Phone number is required' }),
  email: z.string().email({ message: 'Email is required' }),
  startDate: z.string().nonempty({ message: 'Start date is required' }),
  events: z.array(
    z.object({
      startDate: z.string().nonempty({ message: 'Start date is required' }),
      endDate: z.string().nonempty({ message: 'End date is required' }),
      startTime: z.string().nonempty({ message: 'Start time is required' }),
      endTime: z.string().nonempty({ message: 'End time is required' }),
    })
  ),
  details: z.string().nonempty({ message: 'Event description' }),
  facility: z.object({
    label: z.string(),
    value: z.number(),
  }),
  building: z.object({
    label: z.string(),
    value: z.number(),
  }),
  techSupport: z.boolean(),
  techDetails: z.string(),
  doorAccess: z.boolean(),
  doorDetails: z.string(),
});
