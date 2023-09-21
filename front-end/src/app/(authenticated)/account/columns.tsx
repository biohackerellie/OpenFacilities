'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import Link from 'next/link';
import { ArrowUpDown } from 'lucide-react';

interface TableReservations {
  eventname: string;
  facility: string;
  reservationdate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  Details: number;
}

export const columns: ColumnDef<TableReservations>[] = [
  {
    accessorKey: 'eventname',
    header: 'event Name',
  },
  {
    accessorKey: 'facility',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          facility
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'reservationdate',

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
        <Button>
          <Link href={`/reservation/${id}`}>Details</Link>
        </Button>
      );
    },
  },
];
