import React from 'react';
import BuildingFilter from '@/components/calendar/navigation/filterBar';
import { Suspense } from 'react';
import FacilityCardSkeleton from '@/components/ui/skeletons/CardSkeleton';
import CardLayout from './cardLayout';
import { mappedFacilities } from '@/functions/calculations/tableData';
import { type FacilityWithCategory } from '@/lib/types';
import { Separator } from '@/components/ui/separator';

type PartialFacility = Partial<FacilityWithCategory>;
async function getFacilities() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/facilities', {
    next: {
      revalidate: 3600,
    },
  });
  const facilities = await res.json();
  return mappedFacilities(facilities);
}

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <div className=" flex flex-col  ">
      <h1 className="text-4xl m-2 mb-0 flex sm:mb-4 justify-center  font-bold text-center">
        Facilities
      </h1>
      <Separator orientation="horizontal" />
      <div className="hidden sm:inline-block py-4">
        <Suspense fallback={<></>}>
          <BuildingFilter />
        </Suspense>
      </div>
      <Separator orientation="horizontal" />
      <div className="sm:grid justify-center  sm:h-screen pb-0 sm:pb-[50px] scroll-smooth sm:gap-5">
        <Suspense fallback={<FacilityCardSkeleton />}>
          <CardLayout facilities={facilities as unknown as PartialFacility[]} />
        </Suspense>
      </div>
    </div>
  );
}
