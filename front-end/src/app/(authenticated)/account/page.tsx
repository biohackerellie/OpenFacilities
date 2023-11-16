import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { Reservation } from '@/lib/types';
import moment from 'moment';
import LoadingScreen from '@/components/ui/loadingScreen';
import { Suspense } from 'react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

interface TableReservation {
  eventName: string;
  Facility: string;
  ReservationDate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'canceled';
  Details: number;
}

const currentDate = moment().format('YYYY-MM-DD');
async function getData(): Promise<TableReservation[]> {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/users/${user.id}`,
    {
      next: {
        tags: ['user'],
      },
    }
  );
  const userSession = await res.json();

  const reservations: Reservation[] = userSession?.Reservation;

  const Facility = userSession?.Facility;
  const mappedReservations: TableReservation[] = reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort((a, b) =>
        moment(a.startDate).diff(moment(b.startDate))
      );
      const nextUpcomingDate = sortedDates.find((date) =>
        moment(date.startDate).isSameOrAfter(currentDate)
      );
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate ? nextUpcomingDate.startDate : 'N/A',
        approved: reservation.approved,
        Details: reservation.id,
      };
    }
  );

  return mappedReservations;
}

export default async function Account() {
  const data = await getData();
  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-lg font-medium">My Reservations</h3>
      </div>
      <Separator />
      <Suspense fallback={<Skeleton className="w-[400px] h-[400px]" />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
