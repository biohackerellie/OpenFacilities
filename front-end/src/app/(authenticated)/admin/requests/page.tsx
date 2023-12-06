import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import { Reservation, TableReservation } from '@/lib/types';
import { mapRequests } from '@/functions/calculations/tableData';
import { Suspense } from 'react';
import { getRequests } from '@/functions/data/requests';
import TableSkeleton from './skeleton';

export const dynamic = 'force-dynamic';

async function getData() {
  'use server';
  const data: Reservation[] = await getRequests();
  return mapRequests(data);
}

export default async function Requests() {
  const data = await getData();
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-lg font-medium">Requests</h1>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
