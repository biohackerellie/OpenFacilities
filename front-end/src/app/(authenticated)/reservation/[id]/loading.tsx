import React from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';
import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() {
  return (
    <div className="space-y-7">
      <Skeleton className="h-full w-auto" />
    </div>
  );
}
