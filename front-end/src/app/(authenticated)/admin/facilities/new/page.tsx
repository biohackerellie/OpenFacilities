import { SubmitButton } from '@/components/ui/buttons/submitButton';
import { buildingNames } from '@/lib/types/constants';
import NewFacilityForm from './form';

import newFacility from './actions';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function newFacilityForm() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-lg font-medium">New Facility</h1>
      </div>
      <NewFacilityForm />
    </div>
  );
}
