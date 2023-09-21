import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import moment from 'moment';

import { reservation } from 'lib/types';

interface TableReservation {
  eventname: string;
  facility: string;
  reservationdate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  user: string;
  Details: number;
}

const currentDate = moment().format('YYYY-MM-DD');

async function getReservations(): Promise<TableReservation[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/reservation`, {
    cache: 'no-store',
  });
  const Reservations: reservation[] = await res.json();

  const mappedReservations: TableReservation[] = Reservations.map(
    (reservation) => {
      const sortedDates = reservation.reservationdate.sort((a, b) =>
        moment(a.startdate).diff(moment(b.startdate))
      );
      const nextUpcomingDate = sortedDates.find((date) =>
        moment(date.startdate).isSameOrAfter(currentDate)
      );
      return {
        eventname: reservation.eventname,
        facility: reservation.facility.name,
        reservationdate: nextUpcomingDate ? nextUpcomingDate.startdate : 'N/A',
        approved: reservation.approved,
        user: reservation.user?.name || '',
        Details: reservation.id,
      };
    }
  );

  return mappedReservations;
}

export default async function Reservations() {
  const data = await getReservations();

  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        Reservations
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
