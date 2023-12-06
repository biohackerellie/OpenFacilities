import { Button } from '@/components/ui/buttons/button';
import { Label } from '@/components/ui/label';

import { modifyDate } from '@/functions/mutations';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import React from 'react';

type DateProps = {
  id: any;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  resID: any;
} | null;

export default function EditDates({ date }: { date?: DateProps }) {
  const updateDatewithProps = modifyDate.bind(null, date?.id, date?.resID);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <form action={updateDatewithProps}>
          <SheetHeader>
            <SheetTitle>Edit Dates</SheetTitle>
            <SheetDescription>
              Edit the dates that this facility is available for booking.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <input
                name="startDate"
                id="startDate"
                type="date"
                defaultValue={date?.startDate}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <input
                name="endDate"
                id="endDate"
                type="date"
                defaultValue={date?.endDate}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <input
                name="startTime"
                id="startTime"
                type="time"
                defaultValue={date?.startTime}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <input
                name="endTime"
                id="endTime"
                type="time"
                defaultValue={date?.endTime}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save Changes</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
