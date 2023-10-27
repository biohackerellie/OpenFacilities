'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/buttons/button';
import HandleDelete from '@/functions/reservations/deleteDates';
import UpdateStatus from '@/functions/reservations/updateStatus';
import { ArrowUpDown } from 'lucide-react';

import moment from 'moment';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
		cell: ({ row }) => {
			const startDate = row.getValue('startDate') as string;
			const formatedDate = moment(startDate).format('MM/DD/YY');
			return <div>{formatedDate}</div>;
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
		cell: ({ row }) => {
			const endDate = row.getValue('endDate') as string;
			const formatedDate = moment(endDate).format('MM/DD/YY');
			return <div>{formatedDate}</div>;
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
			const dateID = row.getValue('Options') as number;
			const ReservationID = row.getValue('Edit') as number;
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
									<DropdownMenuItem
										onClick={() => UpdateStatus({ id: dateID, status: 'approved', reservationID: ReservationID })}
									>
										Approve Date
									</DropdownMenuItem>
								</>
							)}
							{!isDenied && (
								<>
									<DropdownMenuItem
										onClick={() => UpdateStatus({ id: dateID, status: 'denied', reservationID: ReservationID })}
									>
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
							<Button variant="outline" onClick={() => HandleDelete(dateID, ReservationID)}>
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
