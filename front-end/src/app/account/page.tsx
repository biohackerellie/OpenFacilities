'use client';

import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { Reservation, TableReservation } from '@/lib/types';
import { userReservations } from '@/functions/calculations/tableData';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';

import { useSession } from 'next-auth/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_HOST;

function useSessionQuery(props: { id: string }) {
  const query = useSuspenseQuery({
    queryKey: ['user', props.id],
    queryFn: async () => {
      const path = `/api/account?userId=${props.id}`;
      const url = baseUrl + path;

      const res = await (
        await fetch(url, {
          cache: 'no-store',
        })
      ).json();
      return res;
    },
  });

  return [query.data, query] as const;
}

function TableComponent(props: { id: string }) {
  const [data] = useSessionQuery(props);

  return <DataTable columns={columns} data={data} />;
}

export default function Account() {
  const { data: session } = useSession();
  const userID = session?.user?.id;

  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-lg font-medium">My Reservations</h3>
      </div>
      <Separator />

      <Suspense fallback={<LoadingComponent />}>
        <TableComponent id={userID} />
      </Suspense>
    </div>
  );
}

const LoadingComponent = () => {
  return (
    <div>
      Loading <ReloadIcon className="w-4 h-4 animate-spin" />
    </div>
  );
};
