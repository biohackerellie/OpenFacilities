import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import { reservation } from '@/lib/types';
import moment from 'moment';

interface TableReservation {
  eventname: string;
  facility: string;
  reservationdate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  user: string;
  Details: number;
}

async function getRequests(): Promise<TableReservation[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/request`, {
    cache: 'no-store',
  });

  const requests: reservation[] = await res.json();

  const mappedRequests: TableReservation[] = requests.map((requests) => {
    const sortedDates = requests.reservationdate.sort((a, b) =>
      moment(a.startdate).diff(moment(b.startdate))
    );
    return {
      eventname: requests.eventname,
      facility: requests.facility.name,

      reservationdate: sortedDates[0].startdate,

      approved: requests.approved,
      user: requests.user?.name || '',
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
