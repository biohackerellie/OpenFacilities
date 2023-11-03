import SmallCalendar from '@/components/calendar/smallCalendar';
import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';
import { DateType, Reservation } from '@/lib/types';
import { mapDates } from '@/functions/calculations/tableData';
import { pageSum } from '@/components/ui/tables/reservations/pageSum';
export const dynamic = 'force-dynamic';

async function getReservation(id: number) {
  'use server';
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`
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
              <SmallCalendar
                startDate={startDate}
                facilityId={reservation.Facility.id}
              />
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
