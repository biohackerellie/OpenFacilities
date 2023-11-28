import { Suspense } from 'react';
import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';
import { Skeleton } from '@/components/ui/skeleton';
import { headers } from 'next/headers';
import { mapDates } from '@/functions/calculations/tableData';

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
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
  const mappedDates = await getReservation(params.id);
  return (
    <div className="space-y-7">
      <div>
        <h2 className="Text-lg font-medium">Reservation Dates </h2>
      </div>
      <Suspense fallback={<Skeleton className="h-auto w-auto" />}>
        <DataTable columns={columns} data={mappedDates} />
      </Suspense>
    </div>
  );
}
