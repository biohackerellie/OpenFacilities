import React from 'react';
import { columns } from './columns';
import moment from 'moment';

import { user, facility } from '@prisma/client';
import { reservation } from '@/lib/types';
import { DataTable } from '@/components/ui/tables';

interface Tableuser {
  Name: string;
  eventname: string;
  facility: string;
  reservationdate?: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled' | 'N/A';
  Details: number;
}

interface Extendeduser extends user {
  reservation?: reservation[];
  facility?: facility;
}

const currentDate = moment().format('YYYY-MM-DD');

async function getData(id: string): Promise<Tableuser[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/${id}`, {
    cache: 'no-store',
  });

  const user: Extendeduser = await res.json();
  const reservation: reservation[] = user.reservation || [];

  const mappedReservations: Tableuser[] = reservation.map((reservation) => {
    const sortedDates = reservation.reservationdate.sort((a, b) =>
      moment(a.startdate).diff(moment(b.startdate))
    );
    const nextUpcomingDate = sortedDates.find((date) =>
      moment(date.startdate).isSameOrAfter(currentDate)
    );
    return {
      Name: user.name,
      eventname: reservation.eventname,
      facility: reservation.facility.name,
      reservationdate: nextUpcomingDate ? nextUpcomingDate.startdate : 'N/A',
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
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
