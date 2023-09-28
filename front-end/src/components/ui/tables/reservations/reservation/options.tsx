'use client';
import React, { useState } from 'react';
import { Reservation, Facility } from '@/lib/types';
import { Button } from '@/components/ui/buttons';
import { ChangeFacility } from '@/components/forms';
import { updateEmail } from '@/functions/emails';
import { useFacilities, ApproveAll } from '@/components/hooks';
import { updateRes } from '@/functions/reservations';
import { useRouter } from 'next/navigation';
import { approveReservation, denyReservation } from '@/functions/reservations';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

interface ResNavProps {
  id: number;
  facility: Facility;
}

export default function ReservationOptions({ id, facility }: ResNavProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );
  const handleCategorySelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(Number(event.target.value));
  };

  const router = useRouter();

  const {
    buildings,
    filteredFacilities,
    facilityCategories,
    handleBuildingSelect,
    handleFacilitySelect,
  } = useFacilities();

  const handleSave = async () => {
    await updateRes({
      id: id,
      facilityiD: facility.id,
      catID: selectedCategory,
    });
    router.refresh();
  };

  const sendEmail = async () => {
    try {
      await updateEmail(id);
      alert('Email sent');
    } catch (error) {
      alert('Email failed to send');
    }
  };

  return (
    <>
      <Sheet>
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <AlertDialogTrigger asChild>
                  <span>Approve or Deny All</span>
                </AlertDialogTrigger>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <SheetTrigger asChild>
                <DropdownMenuItem>
                  <Button asChild variant="ghost">
                    <ChangeFacility id={id} facility={facility} />
                  </Button>
                </DropdownMenuItem>
              </SheetTrigger>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => sendEmail()}>
                Send update email
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Approve All</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              This action will notify the user of their reservation status.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  approveReservation(id);
                }}
              >
                Approve
              </AlertDialogAction>
              <AlertDialogAction
                onClick={() => {
                  denyReservation(id);
                }}
              >
                Deny
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <SheetContent>
          <SheetHeader>Change Facility</SheetHeader>
          <SheetDescription>
            <form onSubmit={handleSave}>
              <div className="flex flex-col">
                <label htmlFor="building">Building</label>
                <select
                  id="building"
                  name="building"
                  onChange={handleBuildingSelect}
                >
                  <option value="">Select a building</option>
                  {buildings.map((building) => (
                    <option key={building} value={building}>
                      {building}
                    </option>
                  ))}
                </select>
                <select
                  id="facility"
                  name="facility"
                  onChange={handleFacilitySelect}
                >
                  <option value="">Select a facility</option>
                  {filteredFacilities.map((facility) => (
                    <option
                      key={Number(facility.id)}
                      value={Number(facility.id)}
                    >
                      {facility.name}
                    </option>
                  ))}
                </select>
                <select
                  id="category"
                  name="category"
                  onChange={handleCategorySelect}
                >
                  <option value="">Select a category</option>
                  {facilityCategories.map((category, index) => (
                    <option key={index} value={Number(category.id)}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div>
                  <Button type="submit" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
}
