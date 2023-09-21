import SmallCalendar from '@/components/calendar/smallCalendar';

import { DataTable } from '@/components/ui/tables/reservations/reservation/data-table';
import { columns } from './columns';

type DateType = {
  Options?: number;
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  reservationid: number;
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
    name,
    facility,
    primarycontact,
    phone,
    details,
    category,
    reservationdate,
  } = reservation;

  const startdate = reservationdate[0].startdate;
  const facility = facility.id;
  const mappedDates = reservationdate.map((date: DateType) => {
    return {
      Options: date.id,
      startdate: date.startdate,
      enddate: date.enddate,
      starttime: date.starttime,
      endtime: date.endtime,
      approved: date.approved,
      ReservationID: date.reservationid,
    };
  });

  return (
    <div className="flex flex-wrap justify-center h-full pb-3 mb-2 ">
      <div key={facility} className="     ">
        <div className="  xl:w-[1300px] w-[800px] gap-y-4  drop-shadow-md  m-3 p-4 ">
          <div>
            <h2 className="  font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
              {' '}
              Summary{' '}
            </h2>
          </div>
          <div className="justify-between  my-5  gap-36">
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Primary Contact: {primarycontact} <div> {name}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Contact Number: <div>{phone}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Contact Email: <div>{reservation.email}</div>
            </div>
            <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
              Requested category:{' '}
              <div className="truncate overflow-ellipsis max-w-sm">
                {category.name}
              </div>
            </div>
            <div className="flex flex-row my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
              Description:{' '}
              <div className="text-left ml-10 flex text-md text-ellipsis">
                {details}{' '}
              </div>
            </div>
            <div className="container max-w-[600px] float-left ">
              <h1 className="font-bold text-xl p-4 m-3 text-gray-600 dark:text-gray-300">
                {' '}
                {facility.name} calendar{' '}
              </h1>
              <SmallCalendar startdate={startdate} facilityid={facility.id} />
            </div>
          </div>
          <div className="max-w-[650px] float-right ">
            <h2 className="font-bold text-xl p-4 m-3 text-gray-600 dark:text-gray-300">
              reservation Dates
            </h2>
            <DataTable columns={columns} data={mappedDates} />
          </div>
        </div>
      </div>
    </div>
  );
}
