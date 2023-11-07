'use server';
import { formSchema } from '@/components/forms/schemas/reservationForm';
import { UserByEmail } from '@/lib/db/queries/users';
import { CategoryByFacility } from '@/lib/db/queries/categories';
import moment from 'moment';
import {
  PostReservations,
  PostEvents,
  PostReservationDate,
} from '@/lib/db/queries/reservations';
import generateId from '../calculations/generate-id';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

type formValues = z.infer<typeof formSchema>;

export default async function submitReservation(data: formValues) {
  try {
    console.log('data: ', data);
    const categoryId = await CategoryByFacility.execute({
      facilityId: data.facility,
      name: `%${data.category}%`,
    });
    const UserID = await UserByEmail.execute({ email: data.email });

    const NReservation = {
      userId: UserID?.id,
      eventName: data.eventName,
      facilityId: BigInt(data.facility),
      details: data.details,
      insurance: false,
      categoryId: categoryId?.id,
      name: data.name,
      phone: data.phone,
      techSupport: data.techSupport,
      techDetails: data.techDetails,
      doorAccess: data.doorAccess,
      doorsDetails: data.doorsDetails,
    };

    const res = await PostReservations(NReservation);
    console.log('res: ', res);
    let dateCount = 0;

    for (const event of data.events) {
      const eventId = generateId();
      await PostEvents([{ id: eventId }, { placeholder: true }]);
      console.log('posted event', event);
      await PostReservationDate({
        startDate: moment(event.startDate).format('YYYY-MM-DD'),
        endDate: moment(event.startDate).format('YYYY-MM-DD'),
        startTime: event.startTime,
        endTime: event.endTime,
        gcal_eventid: eventId,
        reservationId: res.id,
      });
      dateCount++;
      console.log('Date');
    }
    revalidatePath('/admin/requests', 'page');
    return 'Success';
  } catch (error) {
    console.log('error: ', error);
    throw new Error('Error creating reservation');
  }
}
