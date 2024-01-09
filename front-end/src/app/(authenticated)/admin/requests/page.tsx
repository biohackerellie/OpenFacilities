import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import { GetRequests } from '@/lib/db/queries/reservations';
import { mapRequests } from '@/functions/calculations/tableData';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import TableSkeleton from './skeleton';

async function getData() {
  'use server';
  const cachedData = unstable_cache(
    async () => GetRequests.execute(),
    ['reservations']
  );
  const data = await cachedData();
  //@ts-expect-error
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
        {/* @ts-expect-error */}
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
