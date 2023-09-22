import { DataTable } from '@/components/ui/tables/users/data-table';
import { User } from '@prisma/client';
import { columns } from './columns';
import prisma from '@/lib/prisma';

interface TableUsers {
  User: string;
  Email: string;
  Role: string;
  Details: string;
}

async function getUsers() {
  'use server';
  const users = await prisma.user.findMany({});

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
