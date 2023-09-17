'use client';

import { ColumnDef } from '@tanstack/react-table';
import { YellowButton, Button } from '@/components/ui/buttons';
import React, { useState } from 'react';
import { approveDate, denyDate } from '@/functions/reservations';
import { ArrowUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import EditDates from '@/components/forms/EditDates';

interface TableDates {
  Options?: any;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  ReservationID: any;
}

export const columns: ColumnDef<TableDates>[] = [
  {
    accessorKey: 'startDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Start Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'endDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          End Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'startTime',
    header: 'Start Time',
  },
  {
    accessorKey: 'endTime',
    header: 'End Time',
  },
  {
    accessorKey: 'approved',
    header: 'Status',
  },

  {
    accessorKey: 'Options',
    header: 'Options',
    cell: ({ row }) => {
      const router = useRouter();

      const reservationID = row.getValue('Edit') as any;

      const isApproved = row.getValue('approved') === 'approved';
      const isDenied = row.getValue('approved') === 'denied';
      const HandleDeny = async (id: number) => {
        try {
          await denyDate(id);
        } catch (error) {
          alert('Error denying reservation');
          console.log(error);
        } finally {
          router.refresh();
        }
      };
      const HandleApprove = async (id: number) => {
        try {
          await approveDate(id);
          router.refresh();
        } catch (error) {
          alert('Error approving reservation');
        } finally {
          router.refresh();
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem></DropdownMenuItem>
            {!isApproved && (
              <>
                <DropdownMenuItem onClick={() => HandleApprove(reservationID)}>
                  Approve Date
                </DropdownMenuItem>
              </>
            )}
            {!isDenied && (
              <>
                <DropdownMenuItem onClick={() => HandleDeny(reservationID)}>
                  Deny Date
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: 'Edit',
    header: 'Edit',
    cell: ({ row }) => {
      const id = row.getValue('Options') as any;
      const startDate = row.getValue('startDate') as string;
      const endDate = row.getValue('endDate') as string;
      const startTime = row.getValue('startTime') as string;
      const endTime = row.getValue('endTime') as string;
      const reservationID = row.getValue('Edit') as any;
      return (
        <EditDates
          id={id}
          startDate={startDate}
          endDate={endDate}
          startTime={startTime}
          endTime={endTime}
          resID={reservationID}
        />
      );
    },
  },
];
