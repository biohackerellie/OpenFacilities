'use client';
import { ApproveAll } from '@/components/hooks';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import Link from 'next/link';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { approveReservation, denyReservation } from '@/functions/reservations';
import { useToast } from '@/components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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
      const { toast } = useToast();
      return (
        <AlertDialog>
          <AlertDialogTrigger>Approve or Deny All</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Approve All</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              This action will notify the user of their reservation status.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  approveReservation(id);
                  toast({
                    title: 'Reservation Approved',
                    description: 'The reservation has been approved.',
                    duration: 5000,
                  });
                }}
              >
                Approve
              </AlertDialogAction>
              <AlertDialogAction
                onClick={() => {
                  denyReservation(id);
                  toast({
                    title: 'Reservation Denied',
                    description: 'The reservation has been denied.',
                    duration: 5000,
                  });
                }}
              >
                Deny
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
        <Button>
          <Link href={`/admin/reservations/${id}`}>Details</Link>
        </Button>
      );
    },
  },
];
