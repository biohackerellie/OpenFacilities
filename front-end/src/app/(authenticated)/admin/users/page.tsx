import { DataTable } from '@/components/ui/tables/users/data-table';
import { GetUsers } from '@/lib/db/queries/users';
import { columns } from './columns';

interface TableUsers {
  User: string;
  Email: string;
  Role: string;
  Details: string;
}

const revalidateTags = ['users'];

async function getUsers() {
  'use server';
  const users = await GetUsers.execute();

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
