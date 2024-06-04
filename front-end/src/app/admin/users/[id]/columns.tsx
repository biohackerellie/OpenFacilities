'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import Link from 'next/link';
import { ArrowUpDown } from 'lucide-react';

interface TableUser {
  eventName: string;
  Facility?: string;
  ReservationDate?: any[];
  approved: 'pending' | 'approved' | 'denied' | 'canceled' | 'N/A';
  Details: number;
}

export const columns: ColumnDef<TableUser>[] = [
  {
    accessorKey: 'eventName',
    header: 'Event Name',
  },
  {
    accessorKey: 'Facility',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Facility
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'ReservationDate',

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Reservation Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'approved',
    header: 'Status',
  },
  {
    accessorKey: 'Details',
    header: 'Details',
    cell: ({ row }) => {
      const id = parseInt(row.getValue('Details'));
      return (
        <Button asChild>
          <Link href={`/reservation/${id}`}>Details</Link>
        </Button>
      );
    },
  },
];
