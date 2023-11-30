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
    <div className=" space-y-7 ">
      <Suspense fallback={<FacilityCardSkeleton />}>
        <CardLayout facilities={facilities as unknown as PartialFacility[]} />
      </Suspense>
    </div>
  );
}
