'use client';

import type { ColumnDef } from '@tanstack/react-table';

import React from 'react';

interface TableFees {
  additionalFees: number;
  feesType: string;
  options: any;
}

export const columns: ColumnDef<TableFees>[] = [
  {
    accessorKey: 'additionalFees',

    header: 'Cost',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('additionalFees'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'feesType',
    header: 'Fee Type',
  },
];
