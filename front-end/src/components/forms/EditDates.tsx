'use client';
import { Button } from '@/components/ui/buttons/button';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
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

interface DateProps {
  id: any;
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  resID: any;
}

interface IForminput {
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  id: any;
}

export default function EditDates(date: DateProps) {
  const { register, handleSubmit } = useForm<IForminput>();
  const router = useRouter();
  const onSubmit = async (data: IForminput) => {
    const id = date.id;

    try {
      await modifyDate(data, date.id);
    } catch (errors) {
      console.log(errors);
    } finally {
      router.refresh();
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register('startdate')}
                id="startdate"
                type="date"
                defaultValue={date.startdate}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="enddate">End Date</Label>
              <input
                {...register('enddate')}
                id="enddate"
                type="date"
                defaultValue={date.enddate}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="starttime">Start Time</Label>
              <input
                {...register('starttime')}
                id="starttime"
                type="time"
                defaultValue={date.starttime}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="endtime">End Time</Label>
              <input
                {...register('endtime')}
                id="endtime"
                type="time"
                defaultValue={date.endtime}
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
