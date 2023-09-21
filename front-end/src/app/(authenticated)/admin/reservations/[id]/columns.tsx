'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import React from 'react';
import HandleDelete from '@/functions/reservations/deleteDates';
import { approveDate, denyDate } from '@/functions/reservations';
import { ArrowUpDown } from 'lucide-react';
import moment from 'moment';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

import EditDates from '@/components/forms/EditDates';

interface TableDates {
  Options: any;
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  ReservationID: any;
}

const HandleDeny = async (id: number) => {
  try {
    await denyDate(id);
  } catch (error) {
    alert('Error denying reservation');
    console.log(error);
  } finally {
    location.reload();
  }
};
const HandleApprove = async (id: number) => {
  try {
    await approveDate(id);
  } catch (error) {
    alert('Error approving reservation');
  } finally {
    location.reload();
  }
};

const DeleteDate = async (id: number) => {
  try {
    await HandleDelete(id);
  } catch (error) {
    alert('Error deleting reservation');
  } finally {
    location.reload();
  }
};

export const columns: ColumnDef<TableDates>[] = [
  {
    accessorKey: 'startdate',
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
    cell: ({ row }) => {
      const startdate = row.getValue('startdate') as string;
      const formatedDate = moment(startdate).format('MM/DD/YY');
      return <div>{formatedDate}</div>;
    },
  },
  {
    accessorKey: 'enddate',
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
    cell: ({ row }) => {
      const enddate = row.getValue('enddate') as string;
      const formatedDate = moment(enddate).format('MM/DD/YY');
      return <div>{formatedDate}</div>;
    },
  },
  {
    accessorKey: 'starttime',
    header: 'Start Time',
  },
  {
    accessorKey: 'endtime',
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
      const dateID = row.getValue('Options') as any;

      const isApproved = row.getValue('approved') === 'approved';
      const isDenied = row.getValue('approved') === 'denied';

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {!isApproved && (
                <>
                  <DropdownMenuItem onClick={() => HandleApprove(dateID)}>
                    Approve Date
                  </DropdownMenuItem>
                </>
              )}
              {!isDenied && (
                <>
                  <DropdownMenuItem onClick={() => HandleDeny(dateID)}>
                    Deny Date
                  </DropdownMenuItem>
                </>
              )}
              <DialogTrigger asChild>
                <DropdownMenuItem>
                  <span>Delete</span>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="bg-slate-200">
            <DialogHeader>
              <DialogTitle className="text-red-500">Delete Date</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this date?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => DeleteDate(dateID)}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },

  {
    accessorKey: 'Edit',
    header: 'Edit',
    cell: ({ row }) => {
      const id = row.getValue('Options') as any;
      const startdate = row.getValue('startdate') as string;
      const enddate = row.getValue('enddate') as string;
      const starttime = row.getValue('starttime') as string;
      const endtime = row.getValue('endtime') as string;
      const reservationID = row.getValue('Edit') as any;
      return (
        <EditDates
          id={id}
          startdate={startdate}
          enddate={enddate}
          starttime={starttime}
          endtime={endtime}
          resID={reservationID}
        />
      );
    },
  },
];
