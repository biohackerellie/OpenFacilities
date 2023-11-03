import SmallCalendar from '@/components/calendar/smallCalendar';
import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';
import { getReservation } from './page';

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
          <div className="hidden sm:inline-block justify-between   p-2 float-left   my-5  gap-36">
            <div className="hidden sm:flex pb-4">
              <h2 className="   font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
                {' '}
                Summary{' '}
              </h2>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Primary Contact: {reservation.primaryContact}{' '}
              <div> {reservation.name}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Contact Number: <div>{reservation.phone}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Contact Email: <div>{reservation.User?.email}</div>
            </div>
            <div className="flex flex-row  sm:justify-between text-lg border-b-2 max-w-[600px]  text-justify ">
              Requested Category:{' '}
              <div className="truncate overflow-ellipsis text max-w-xs ml-2">
                {reservation.Category?.name}
              </div>
            </div>
            <div className="flex flex-row  max-w-[500px] my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
              Description:{' '}
              <div className="text-left ml-10 flex text-md text-ellipsis">
                {reservation.details}{' '}
              </div>
            </div>
            {reservation.techSupport && (
              <div className="flex flex-row my-10 max-w-[500px] text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
                Tech Support Requested:
                <div className="text-left ml-10 max-w-[500px] flex text-md text-ellipsis">
                  {reservation.techDetails}{' '}
                </div>
              </div>
            )}
            {reservation.doorAccess && (
              <div className="flex flex-row my-10 max-w-[500px] text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
                Door Access Requested:
                <div className="text-left ml-10 flex text-md text-ellipsis">
                  {reservation.doorsDetails}{' '}
                </div>
              </div>
            )}
          </div>
          <div className="container  max-w-[550px] px-2 float-left ">
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

          <div className="max-w-[300px] sm:max-w-[600px] float-right  mr-7  ">
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
