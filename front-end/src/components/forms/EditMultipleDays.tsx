import { Button } from '@/components/ui/buttons/button';
import { Label } from '@/components/ui/label';

import { modifyDates } from '@/functions/mutations/modifyDate';
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

export default function EditDates(ids: number[]) {
  const updateDatewithProps = modifyDates.bind(null, ids);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Selected</Button>
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
              <Label htmlFor="startTime">Start Time</Label>
              <input name="startTime" id="startTime" type="time" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <input name="endTime" id="endTime" type="time" />
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
