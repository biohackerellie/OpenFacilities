import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import { Reservation } from '@/lib/types';
import { headers } from 'next/headers';
import moment from 'moment';

interface TableReservation {
  eventName: string;
  Facility: string;
  ReservationDate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  User: string;
  Details: number;
}

export const dynamic = 'force-dynamic';

async function getRequests(): Promise<TableReservation[]> {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/request`, {
    headers: {
      Cookie: auth,
    },
  });

  const requests: Reservation[] = await res.json();

  const mappedRequests: TableReservation[] = requests.map((requests) => {
    const sortedDates = requests.ReservationDate.sort((a, b) =>
      moment(a.startDate).diff(moment(b.startDate))
    );
    return {
      eventName: requests.eventName,
      Facility: requests.Facility.name,

      ReservationDate: sortedDates[0]?.startDate,

      approved: requests.approved,
      User: requests.User?.name || '',
      Details: requests.id,
    };
  });
  return mappedRequests;
}

export default async function Requests() {
  const data = await getRequests();
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        Requests
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
