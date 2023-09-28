import React from 'react';
import dynamic from 'next/dynamic';
import SubNav from '@/components/ui/subNav';
import { Suspense } from 'react';
import FacilityCardSkeleton from '@/components/ui/skeletons/CardSkeleton';
import FacilityCard from './facility_card';

async function getFacilities() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/facilities');
  const facilities = await res.json();
  return facilities;
}

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <div className=" grid sm:place-items-center min-h-screen pb-[50px] scroll-smooth   gap-5 ">
      <h1 className="text-4xl m-2 mb-2 font-bold text-center">Facilities</h1>
      <SubNav />
      <div className="grid grid-cols-1 p-0 scale-75 sm:scale-100 sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] overflow-auto">
        <Suspense fallback={<FacilityCardSkeleton />}>
          {facilities?.map((facility: any) => (
            <div key={facility.id} className="gap-3 m-2 show flex-1">
              <FacilityCard {...facility} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
