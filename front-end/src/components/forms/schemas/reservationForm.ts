import * as z from 'zod';

const eventSchema = z.object({
  startDate: z.string().nonempty({ message: 'Start date is required' }),
  startTime: z.string().nonempty({ message: 'Start time is required' }),
  endTime: z.string().nonempty({ message: 'End time is required' }),
});

export const formSchema = z.object({
  eventName: z.string().min(3, {
    message: 'Event name must be at least 3 characters',
  }),
  category: z.string().nonempty({ message: 'Category is required' }),
  name: z.string().nonempty({ message: 'Name is required' }),
  phone: z.string().nonempty({ message: 'Phone number is required' }),
  email: z.string().email({ message: 'Email is required' }),
  events: z.array(eventSchema).nonempty({ message: 'Events are required' }),
  details: z.string().nonempty({ message: 'Please provide a description for your event' }),
  facility: z.number({ required_error: 'Facility is required' }),

  techSupport: z.boolean(),
  techDetails: z.string(),
  doorAccess: z.boolean(),
  doorsDetails: z.string(),
});
