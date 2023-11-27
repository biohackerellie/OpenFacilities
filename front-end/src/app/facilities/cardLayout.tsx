'use client';
import FacilityCard from './facility_card';
import { useSearchParams } from 'next/navigation';
import { type FacilityWithCategory } from '@/lib/types';
import React from 'react';

type PartialFacility = Partial<FacilityWithCategory>;

export default function CardLayout({
  facilities,
}: {
  facilities: PartialFacility[];
}) {
  const searchParams = useSearchParams();
  const selectedBuilding = searchParams.get('building') || 'All';

  if (selectedBuilding !== 'All') {
    const filteredFacilities = facilities.filter(
      (facility) => facility.building === selectedBuilding
    );

    return (
      <>
        <div className="flex flex-col sm:grid  p-0  sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] ">
          {filteredFacilities?.map((facility: any) => (
            <div key={facility.id} className="gap-3 m-2 show flex-1">
              <FacilityCard {...facility} />
            </div>
          ))}
        </div>
      </>
    );
  } else if (
    selectedBuilding === 'All' ||
    selectedBuilding === null ||
    searchParams === null
  ) {
    return (
      <>
        <div className="flex flex-col sm:grid  p-0  sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] ">
          {facilities?.map((facility: any) => (
            <div key={facility.id} className="gap-3 m-2 show flex-1">
              <FacilityCard {...(facility as PartialFacility)} />
            </div>
          ))}
        </div>
      </>
    );
  }
}
