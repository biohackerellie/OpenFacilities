import React from 'react';
import { ParamParser } from '@/lib/paramParser';
import { Suspense } from 'react';
import FacilityCardSkeleton from '@/components/ui/skeletons/CardSkeleton';
import CardLayout from './cardLayout';
import { mappedFacilities } from '@/functions/calculations/tableData';
import { type FacilityWithCategory } from '@/lib/types';

type PartialFacility = Partial<FacilityWithCategory>;
type PageProps = {
  searchParams: {
    building?: string;
  };
};

async function getFacilities() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/facilities', {
    next: {
      revalidate: 3600,
      tags: ['facilities'],
    },
  });
  const facilities = await res.json();
  return mappedFacilities(facilities);
}

export default async function FacilitiesPage({ searchParams }: PageProps) {
  const facilities = await getFacilities();
  const selectedBuilding = ParamParser.parseServerSide(searchParams.building);
  return (
    <div className=" space-y-7 ">
      <CardLayout
        facilities={facilities as unknown as PartialFacility[]}
        building={selectedBuilding}
      />
    </div>
  );
}
