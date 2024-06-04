import { mapFacilityTable } from '@/functions/calculations/tableData';
import type {FacilityWithCategory} from '@/lib/types';
import { Suspense } from 'react';
import TableSkeleton from '../requests/skeleton';
import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';

async function getFacilities() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/facilities', {
    next: {
      revalidate: 3600,
      tags: ['facilities'],
    },
  });
  const facilities = await res.json();
  return mapFacilityTable(facilities);
}

export default async function adminFacilitiesPage() {
  const data = await getFacilities();

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-lg font-medium">Facilities</h1>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
