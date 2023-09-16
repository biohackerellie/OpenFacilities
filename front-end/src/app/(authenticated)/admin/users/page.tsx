import { DataTable } from '@/components/ui/tables/users/data-table';
import { User } from '@prisma/client';
import { columns } from './columns';

interface TableUsers {
  User: string;
  Email: string;
  Role: string;
  Details: string;
}

async function getUsers(): Promise<TableUsers[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  const users: User[] = await res.json();

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
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        Users
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
