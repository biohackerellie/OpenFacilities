import SmallCalendarComp from '@/components/calendar/pageComponent';
import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';
import { DateType, Reservation } from '@/lib/types';
import { mapDates } from '@/functions/calculations/tableData';
import { pageSum } from '@/components/ui/tables/reservations/pageSum';
import { headers } from 'next/headers';
export const dynamic = 'force-dynamic';

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
      },
    }
  ).then((res) => res.json());

  const reservation: Reservation = res;

  const { ReservationDate } = reservation;
  const mappedDates = await mapDates(ReservationDate);
  return { mappedDates, ...reservation };
}

export default async function reservationPage({
  params,
}: {
  params: { id: number };
}) {
  const { mappedDates, ...reservation } = await getReservation(params.id);

  const startDate = reservation.ReservationDate[0].startDate;
  const facility = Number(reservation.Facility.id);

  return (
    <div className="flex flex-col xl:flex-row sm:flex-wrap sm:justify-center h-full pb-3 mb-2 ">
      <div>
        <div className="  xl:w-[1300px] w-auto  gap-y-4  drop-shadow-md  m-3 p-4 ">
          {pageSum(reservation)}
          <div className="  max-w-[550px] px-2 float-right ">
            <h1 className="font-bold text-xl p-4 m-3 text-gray-600 dark:text-gray-300">
              {' '}
              {reservation.Facility.name} calendar{' '}
            </h1>
            <Suspense fallback={<LoadingScreen />}>
              <SmallCalendarComp facilityId={facility} />
            </Suspense>
          </div>

          <div className="max-w-[300px] sm:max-w-[600px] float-left  mr-7  ">
            <h2 className="font-bold text-xl m-3 text-gray-600 dark:text-gray-300">
              Reservation Dates
            </h2>
            <Suspense fallback={<LoadingScreen />}>
              <DataTable columns={columns} data={mappedDates} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
