import { DataTable } from '@/components/ui/tables/users/data-table';
import { GetUsers } from '@/lib/db/queries/users';
import type { SelectUser } from '@/lib/db/schema';
import { columns } from './columns';
import { headers } from 'next/headers';

interface TableUsers {
  User: string;
  Email: string;
  Role: string;
  Details: string;
}

async function getUsers() {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie')!;

  const res = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/users`, {
    headers: {
      Cookie: auth,
    },
    cache: 'no-store',
  });
  const users: SelectUser[] = await res.json();

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
      <DataTable columns={columns} data={data} />
    </div>
  );
}
