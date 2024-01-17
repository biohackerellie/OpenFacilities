import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import { Reservation, TableReservation } from '@/lib/types';
import { mapRequests } from '@/functions/calculations/tableData';
import { Suspense } from 'react';
import { headers } from 'next/headers';
import TableSkeleton from './skeleton';

export const dynamic = 'force dynamic';

async function getData() {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;

  const data: Reservation[] = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/requests`,
    {
      headers: {
        Cookie: auth,
      },
      cache: 'no-store',
    }
  ).then((res) => res.json());
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
