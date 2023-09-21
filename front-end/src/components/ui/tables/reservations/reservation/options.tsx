'use client';
import React, { useState } from 'react';
import { reservation, facility } from '@/lib/types';
import { Button } from '@/components/ui/buttons';
import { Changefacility } from '@/components/forms';
import { updateEmail } from '@/functions/emails';
import { useFacilities, ApproveAll } from '@/components/hooks';
import { updateRes } from '@/functions/reservations';
import { useRouter } from 'next/navigation';
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
  facility: facility;
}

export default function ReservationOptions({ id, facility }: ResNavProps) {
  const [selectedcategory, setSelectedcategory] = useState<number | undefined>(
    undefined
  );
  const handlecategorySelect = (
    event: React.Changeevent<HTMLSelectElement>
  ) => {
    setSelectedcategory(Number(event.target.value));
  };

  const router = useRouter();

  const {
    buildings,
    filteredFacilities,
    facilityCategories,
    handleBuildingSelect,
    handlefacilitySelect,
  } = useFacilities();

  const handleSave = async () => {
    await updateRes({
      id: id,
      facilityiD: facility.id,
      catID: selectedcategory,
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => ApproveAll(id)}>
              Approve/Deny reservation
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <SheetTrigger asChild>
              <DropdownMenuItem>
                <Button asChild variant="ghost">
                  <Changefacility id={id} facility={facility} />
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
        <SheetContent>
          <SheetHeader>Change facility</SheetHeader>
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
                  onChange={handlefacilitySelect}
                >
                  <option value="">Select a facility</option>
                  {filteredFacilities.map((facility) => (
                    <option key={facility.id} value={facility.id}>
                      {facility.name}
                    </option>
                  ))}
                </select>
                <select
                  id="category"
                  name="category"
                  onChange={handlecategorySelect}
                >
                  <option value="">Select a category</option>
                  {facilityCategories.map((category, index) => (
                    <option key={index} value={category.id}>
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
