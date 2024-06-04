import { Suspense } from 'react';
import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';
import { Skeleton } from '@/components/ui/skeleton';
import { headers } from 'next/headers';
import { mapDates } from '@/functions/calculations/tableData';
import { adminColumns } from './adminColumns';
import { getCurrentUser } from '@/functions/data/auth';
import { Button } from '@/components/ui/buttons';
import dynamic from 'next/dynamic';

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie')!;
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
      },
      next: {
        tags: ['reservations'],
      },
    }
  );
  const response = await res.json();
  const dates = response.ReservationDate;

  return mapDates(dates);
}

export default async function reservationDatesPage({
  params,
}: {
  params: { id: number };
}) {
  const session = await getCurrentUser();
  const AddDates = dynamic(() => import('@/components/ui/alerts/addDates'));

  const mappedDates = await getReservation(params.id);
  return (
    <div className="space-y-7" suppressHydrationWarning>
      <Suspense fallback={<Skeleton className="h-auto w-auto" />}>
        <div>
          <h2 className="Text-lg font-medium">Reservation Dates </h2>
        </div>

        {session.isAdmin() ? (
          <>
            <DataTable columns={adminColumns} data={mappedDates} />
            <div className="float-right">
              <AddDates id={params.id} />
            </div>
          </>
        ) : (
          <>
            <DataTable columns={columns} data={mappedDates} />
          </>
        )}
      </Suspense>
    </div>
  );
}
