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
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  resID: any;
}

interface IForminput {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  id: any;
}

export default function EditDates(date: DateProps) {
  const { register, handleSubmit } = useForm<IForminput>();
  const router = useRouter();
  const onSubmit = async (data: IForminput) => {
    const id = date.id;

    try {
      await modifyDate(data, date.id, date.resID);
    } catch (errors) {
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
                {...register('startDate')}
                id="startDate"
                type="date"
                defaultValue={date.startDate}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <input
                {...register('endDate')}
                id="endDate"
                type="date"
                defaultValue={date.endDate}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <input
                {...register('startTime')}
                id="startTime"
                type="time"
                defaultValue={date.startTime}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <input
                {...register('endTime')}
                id="endTime"
                type="time"
                defaultValue={date.endTime}
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
