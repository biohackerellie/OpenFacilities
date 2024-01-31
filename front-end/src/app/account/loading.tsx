import React from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';

export default function Loading() {
  return (
    <div className="container absolute">
      <LoadingScreen />
    </div>
  );
}
