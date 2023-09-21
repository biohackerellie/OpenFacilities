'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons';
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import moment from 'moment';

interface TableDates {
  Options: any;
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  ReservationID: any;
}

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
];
