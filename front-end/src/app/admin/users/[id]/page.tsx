import React from 'react';
import { columns } from './columns';
import moment from 'moment';
import { Suspense } from 'react';
import TableSkeleton from './skeleton';
import { getUser } from '@/functions/data/users';
import type { Reservation} from '@/lib/types';
import { User } from '@/lib/types';
import { DataTable } from '@/components/ui/tables';

interface TableUser {
  Name: string;

  eventName: string;
  Facility: string;
  ReservationDate?: any[];
  approved: 'pending' | 'approved' | 'denied' | 'canceled' | 'N/A';
  Details: number;
}

const currentDate = moment().format('YYYY-MM-DD');

async function getData(id: string) {
  const user = await getUser(id);
  const reservation: Reservation[] = user.Reservation || [];
  if (reservation.length === 0) {
    return [user];
  }

  const mappedReservations: TableUser[] = reservation.map((reservation) => {
    const sortedDates = reservation.ReservationDate.sort((a, b) =>
      moment(a.startDate).diff(moment(b.startDate))
    );
    const nextUpcomingDate = sortedDates.find((date) =>
      moment(date.startDate).isSameOrAfter(currentDate)
    );
    return {
      Name: user.name,
      eventName: reservation.eventName,
      Facility: reservation.Facility.name,
      ReservationDate: nextUpcomingDate ? nextUpcomingDate.startDate : 'N/A',
      approved: reservation.approved,
      Details: reservation.id,
    };
  });
  return mappedReservations;
}

export default async function accountPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const data = await getData(id);

  const name = data[0].Name || data[0].name;
  return (
    <div className="space-y-7 space-x-2 ">
      <h1 className="font-bold flex justify-center m-3 border-b p-3 drop-shadow-lg text-4xl">
        {name}
      </h1>
      <h2 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        Reservations
      </h2>
      {data.length === 0 ? (
        <p className="text-center">No reservations found.</p>
      ) : (
        <Suspense fallback={<TableSkeleton />}>
          <DataTable columns={columns} data={data} />
        </Suspense>
      )}
    </div>
  );
}
