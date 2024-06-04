'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons/button';
import HandleDelete from '@/functions/reservations/deleteDates';
import UpdateStatus from '@/functions/reservations/updateStatus';
import { ArrowUpDown } from 'lucide-react';
import type { DateType } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import EditDates from '@/components/forms/EditDates';
import EditMultipleDates from '@/components/forms/EditMultipleDays';

export const adminColumns: ColumnDef<DateType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
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
      column.toggleVisibility(false);
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
      const dateID = row.getValue('Options');
      const ReservationID = row.getValue('Edit');
      const isApproved = row.getValue('approved') === 'approved';
      const isDenied = row.getValue('approved') === 'denied';

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {!isApproved && (
              <>
                <DropdownMenuItem
                  onClick={() =>
                    UpdateStatus({
                      id: dateID,
                      status: 'approved',
                      reservationID: ReservationID,
                    })
                  }
                >
                  Approve Date
                </DropdownMenuItem>
              </>
            )}
            {!isDenied && (
              <>
                <DropdownMenuItem
                  onClick={() =>
                    UpdateStatus({
                      id: dateID,
                      status: 'denied',
                      reservationID: ReservationID,
                    })
                  }
                >
                  Deny Date
                </DropdownMenuItem>
              </>
            )}

            <DropdownMenuItem
              onClick={() => HandleDelete(dateID, ReservationID)}
            >
              Delete Date
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },

  {
    accessorKey: 'Edit',
    header: ({ table }) => {
      const selectedRows = table.getSelectedRowModel();
      const selectedData = selectedRows.flatRows.map((row) => row.original);
      const SelectedRowIds = selectedData.map((row) => row.Options!);
      return (
        <>
          <EditMultipleDates ids={SelectedRowIds} />
        </>
      );
    },
    cell: ({ row }) => {
      const id = row.getValue('Options');
      const startDate = row.getValue('startDate');
      const endDate = row.getValue('endDate');
      const startTime = row.getValue('startTime');
      const endTime = row.getValue('endTime');
      const reservationID = row.getValue('Edit');

      return (
        <EditDates
          date={{
            id: id,
            startDate: startDate,
            endDate: endDate,
            startTime: startTime,
            endTime: endTime,
            resID: reservationID,
          }}
        />
      );
    },
  },
];
