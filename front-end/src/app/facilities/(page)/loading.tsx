import FacilityCardSkeleton from '@/components/ui/skeletons/CardSkeleton';
import React from 'react';

export default function Loading() {
  return (
    <div className="container absolute grid grid-cols-2">
      <FacilityCardSkeleton />
      <FacilityCardSkeleton />
    </div>
  );
}
