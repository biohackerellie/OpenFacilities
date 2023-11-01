'use client';
import { Button } from '@/components/ui/buttons/button';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { addFee, removeFee } from '@/functions/mutations';

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

interface IForminput {
  additionalFees: number;
  feesType: string;
  reservationId: any;
}

export default function EditPricing(id: any) {
  const { register, handleSubmit } = useForm<IForminput>();
  const router = useRouter();
  const reservationID = id.id;
  console.log('reservationID', reservationID);
  const onSubmit = async (data: IForminput) => {
    try {
      await addFee(data, reservationID);
    } catch (errors) {
      console.log(errors);
    } finally {
      router.refresh();
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add Fee</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader>
            <SheetTitle>Add Fee</SheetTitle>
            <SheetDescription>
              Add an additional fee to this reservation.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="start-date">Fee Amount</Label>
              <input
                {...register('additionalFees')}
                id="additionalFees"
                type="number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="feesType">Type of Fee</Label>
              <input {...register('feesType')} id="feesType" />
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
