import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function TableSkeleton() {
  return (
    <div className="flex flex-col items-center  space-y-2">
      <Skeleton className="h-16 w-[650px] " />
      <Skeleton className="h-16 w-[650px]" />
      <Skeleton className="h-16 w-[650px]" />
      <Skeleton className="h-16 w-[650px]" />
      <Skeleton className="h-16 w-[650px]" />
    </div>
  );
}
