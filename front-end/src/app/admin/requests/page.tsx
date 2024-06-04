import { columns } from './columns';
import { DataTable } from '@/components/ui/tables';
import type { Reservation} from '@/lib/types';
import { TableReservation } from '@/lib/types';
import { mapRequests } from '@/functions/calculations/tableData';

import { headers } from 'next/headers';

async function getData() {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie')!;

  const data: Reservation[] = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/requests`,
    {
      headers: {
        Cookie: auth,
      },
      cache: 'no-store',
    }
  ).then((res) => res.json());
  return mapRequests(data);
}

export default async function Requests() {
  const data = await getData();
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-lg font-medium">Requests</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
