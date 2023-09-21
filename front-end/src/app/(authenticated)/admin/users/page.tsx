import { DataTable } from '@/components/ui/tables/users/data-table';
import { user } from '@prisma/client';
import { columns } from './columns';

interface Tableusers {
  user: string;
  Email: string;
  Role: string;
  Details: string;
}

async function getusers(): Promise<Tableusers[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  const users: user[] = await res.json();

  const mappedusers: Tableusers[] = users.map((user) => {
    return {
      user: user.name,
      Email: user.email,
      Role: user.role,
      Details: user.id.toString(),
    };
  });
  return mappedusers;
}

export default async function users() {
  const data = await getusers();

  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        users
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
