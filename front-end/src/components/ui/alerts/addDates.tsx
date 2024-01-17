import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { CreateGoogleEvent } from '@/functions/google/singleDate';
import { Button } from '@/components/ui/buttons/button';
import { db } from '@/lib/db';
import { ReservationDate } from '@/lib/db/schema';
import { revalidateTag } from 'next/cache';

// form action to add dates to reservation
async function AddDates(id: number, formData: FormData) {
  'use server';
  const startDate = formData.get('startDate') as string;
  const endDate = startDate;
  const startTime = formData.get('startTime') as string;
  const endTime = formData.get('endTime') as string;
  let dateID = null;
  try {
    const [data] = await db
      .insert(ReservationDate)
      .values({
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        reservationId: id,
        approved: 'approved',
      })
      .returning({ newID: ReservationDate.id });
    dateID = data.newID;
  } catch (err) {
    throw new Error('DB Error', { cause: err });
  } finally {
    if (dateID) {
      CreateGoogleEvent(dateID);
    }
  }
  revalidateTag('reservations');
}

const AddDateDialog = ({ id }: { id: number }) => {
  const addDate = AddDates.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Date</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Date</DialogTitle>
        </DialogHeader>
        <DialogDescription>Add a date to this reservation.</DialogDescription>
        <form action={addDate}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="startDate">Start Date</label>
              <input name="startDate" id="startDate" type="date" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="startTime">Start Time</label>
              <input name="startTime" id="startTime" type="time" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="endTime">End Time</label>
              <input name="endTime" id="endTime" type="time" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Save Changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDateDialog;
