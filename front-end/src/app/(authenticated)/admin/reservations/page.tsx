import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import moment from 'moment';
import { headers } from 'next/headers';
import { Reservation } from 'lib/types';

interface TableReservation {
  eventName: string;
  Facility: string;
  ReservationDate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  User: string;
  Details: number;
}

const currentDate = moment().format('YYYY-MM-DD');

async function getReservations(): Promise<TableReservation[]> {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/reservation`, {
    headers: {
      Cookie: auth,
    },
  });
  const Reservations: Reservation[] = await res.json();

  const mappedReservations: TableReservation[] = Reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort((a, b) =>
        moment(a.startDate).diff(moment(b.startDate))
      );
      const nextUpcomingDate = sortedDates?.find((date) =>
        moment(date.startDate).isSameOrAfter(currentDate)
      );
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate ? nextUpcomingDate?.startDate : 'N/A',
        approved: reservation.approved,
        User: reservation.User?.name || '',
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
