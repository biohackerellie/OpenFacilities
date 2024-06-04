'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import Link from 'next/link';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import moment from 'moment';

interface TableUsers {
  User: string;
  Email: string;
  Role: string;
  Details: string | number;
}

export const columns: ColumnDef<TableUsers>[] = [
  {
    accessorKey: 'User',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Email',
    header: 'Email',
  },
  {
    accessorKey: 'Role',

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Details',
    header: 'Details',
    cell: ({ row }) => {
      const id = row.getValue('Details');
      return (
        <Button asChild>
          <Link href={`/admin/users/${id}`}>Details</Link>
        </Button>
      );
    },
  },
];
