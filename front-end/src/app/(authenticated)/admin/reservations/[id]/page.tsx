import SmallCalendar from '@/components/calendar/smallCalendar';
import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';

type DateType = {
  Options?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  reservationId: number;
  id: any;
};
export default async function reservationPage({
  params,
}: {
  params: { id: number };
}) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${params.id}`,
    { cache: 'no-store' }
  );
  const reservation = await res.json();
  const {
    id,
    name,
    primaryContact,
    phone,
    details,
    Category,
    eventName,
    Facility,
    ReservationDate,
  } = reservation;

  const facility = Facility.id;
  const mappedDates = ReservationDate.map((date: DateType) => {
    return {
      Options: date.id,
      startDate: date.startDate,
      endDate: date.endDate,
      startTime: date.startTime,
      endTime: date.endTime,
      approved: date.approved,
      ReservationID: date.reservationId,
    };
  });

  return (
    <div className="flex flex-wrap justify-center h-full pb-3 mb-2 ">
      <div key={facility} className="     ">
        <div className="  gap-y-4  drop-shadow-md  m-3 p-4 ">
          <div>
            <h2 className="  font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
              {' '}
              Summary{' '}
            </h2>
          </div>
          <div className="justify-between  my-5  gap-36">
            <div className="flex flex-row  justify-between text-lg border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              Primary Contact: {primaryContact} <div> {name}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              Contact Number: <div>{phone}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              Contact Email: <div>{reservation.email}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              Requested Category:{' '}
              <div className="truncate overflow-ellipsis max-w-sm">
                {Category.name}
              </div>
            </div>
            <div className="flex flex-row my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify">
              Description:{' '}
              <div className="text-right ml-10 flex text-md text-ellipsis">
                {details}{' '}
              </div>
            </div>
            <div className="container">
              <h1 className="font-bold text-center text-xl">
                {' '}
                {Facility.name} calendar{' '}
              </h1>
              <SmallCalendar facilityId={Facility.id} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-xl p-4 m-3 text-gray-600 dark:text-gray-300">
          Reservation Dates
        </h2>
        <DataTable columns={columns} data={mappedDates} />
      </div>
    </div>
  );
}
