import React from 'react';
import { columns } from './columns';
import moment from 'moment';
import { Suspense } from 'react';
import TableSkeleton from './skeleton';
import { User, Facility } from '@prisma/client';
import { Reservation } from '@/lib/types';
import { DataTable } from '@/components/ui/tables';

interface TableUser {
  Name: string;
  eventName: string;
  Facility: string;
  ReservationDate?: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled' | 'N/A';
  Details: number;
}

interface ExtendedUser extends User {
  Reservation?: Reservation[];
  Facility?: Facility;
}

const currentDate = moment().format('YYYY-MM-DD');

async function getData(id: string): Promise<TableUser[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/${id}`, {
    method: 'GET',
  });

  const user: ExtendedUser = await res.json();
  const reservation: Reservation[] = user.Reservation || [];

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
  const name = data.length > 0 ? data[0].Name : 'Unknown';

  return (
    <div className="container mx-auto py-10">
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
