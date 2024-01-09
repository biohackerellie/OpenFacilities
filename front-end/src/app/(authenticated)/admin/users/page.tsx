import { DataTable } from '@/components/ui/tables/users/data-table';
import { GetUsers } from '@/lib/db/queries/users';
import { columns } from './columns';
import { unstable_cache } from 'next/cache';
import { Suspense } from 'react';
import TableSkeleton from '../requests/skeleton';

interface TableUsers {
  User: string;
  Email: string;
  Role: string;
  Details: string;
}

async function getUsers() {
  'use server';
  const data = unstable_cache(async () => GetUsers.execute(), ['users']);
  const users = await data();
  const mappedUsers: TableUsers[] = users.map((user) => {
    return {
      User: user.name,
      Email: user.email,
      Role: user.role,
      Details: user.id.toString(),
    };
  });
  return mappedUsers;
}

export default async function Users() {
  const data = await getUsers();

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-lg font-medium">Users</h1>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
