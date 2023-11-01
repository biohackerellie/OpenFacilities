import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import { Reservation, TableReservation } from '@/lib/types';
import { headers } from 'next/headers';
import { mapRequests } from '@/functions/calculations/tableData';
import { Suspense } from 'react';
import TableSkeleton from './skeleton';

export const dynamic = 'force-dynamic';
async function getRequests(): Promise<TableReservation[]> {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/request`, {
    headers: {
      Cookie: auth,
    },
  });

  const requests: Reservation[] = await res.json();

  return mapRequests(requests);
}

export default async function Requests() {
  const data = await getRequests();
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        Requests
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
