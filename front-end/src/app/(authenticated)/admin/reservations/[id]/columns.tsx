'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import React from 'react';
import HandleDelete from '@/functions/reservations/deleteDates';
import { approveDate, denyDate } from '@/functions/reservations';
import { ArrowUpDown } from 'lucide-react';

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
      const reservationID = row.getValue('Options') as any;

      const isApproved = row.getValue('approved') === 'approved';
      const isDenied = row.getValue('approved') === 'denied';
      const HandleDeny = async (id: number) => {
        try {
          await denyDate(id);
        } catch (error) {
          alert('Error denying reservation');
          console.log(error);
        } finally {
          location.reload();
        }
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
        return (
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem></DropdownMenuItem>
                {!isApproved && (
                  <>
                    <DropdownMenuItem
                      onClick={() => HandleApprove(reservationID)}
                    >
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
                <DialogTrigger asChild>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Date</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this date?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="ghost"
                  onClick={() => DeleteDate(reservationID)}
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      };
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
