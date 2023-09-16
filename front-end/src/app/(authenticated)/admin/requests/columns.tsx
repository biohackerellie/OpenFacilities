'use client';
import { useApproveAll } from '@/components/hooks';
import { ColumnDef } from '@tanstack/react-table';
import { YellowButton, Button } from '@/components/ui/buttons';
import Link from 'next/link';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

interface TableReservations {
  eventName: string;
  Facility: string;
  ReservationDate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  User: string;
  Details: number;
}

export const columns: ColumnDef<TableReservations>[] = [
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
    header: 'Approve or Deny',
    cell: ({ row }) => {
      const id = parseInt(row.getValue('Details'));
      return (
        <Button
          variant="outline"
          onClick={() => {
            useApproveAll(id);
          }}
        >
          Approve/Deny
        </Button>
      );
    },
  },
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
    accessorKey: 'Details',
    header: 'Details',
    cell: ({ row }) => {
      const id = parseInt(row.getValue('Details'));
      return (
        <YellowButton>
          <Link href={`/admin/reservations/${id}`}>Details</Link>
        </YellowButton>
      );
    },
  },
];
