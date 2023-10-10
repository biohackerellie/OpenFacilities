"use client"
import React from 'react';
import { Facility } from '@/lib/types';
import { Button } from '@/components/ui/buttons';

import { updateEmail } from '@/functions/emails';

import { useRouter } from 'next/navigation';
import { approveReservation, denyReservation } from '@/functions/reservations';

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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


interface ResNavProps {
	id: number;
	facility: Facility;
}

export default function ReservationOptions({ id, facility }: ResNavProps) {



	const router = useRouter();

	const sendEmail = async () => {
		try {
			await updateEmail(id);
			alert('Email sent');
		} catch (error) {
			alert('Email failed to send');
		}
	};

	return (
		<AlertDialog>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="ghost">Options</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem asChild>
						<AlertDialogTrigger >

							<span>Approve or Deny All</span>

						</AlertDialogTrigger>
					</DropdownMenuItem>

					<DropdownMenuSeparator />

					<DropdownMenuItem
						onClick={() => {
							sendEmail();
						}}
					>
						Send update email
					</DropdownMenuItem>
					<DropdownMenuSeparator />
				</DropdownMenuContent>
			</DropdownMenu>
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
						}}
					>
						Approve
					</AlertDialogAction>
					<AlertDialogAction
						onClick={() => {
							denyReservation(id);
						}}
					>
						Deny
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
