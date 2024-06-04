"use client";
import { useRouter } from "next/navigation";
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
} from "./alert-dialog"
import * as React from "react"

interface Props {
	isOpen: boolean
}



export default function SubmissionDialog() {

	const [open, setOpen] = React.useState(false);

	const router = useRouter();
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Success!</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogDescription>
					Your request has been submitted and is now pending approval.
				</AlertDialogDescription>
				<AlertDialogFooter>
					Submit another request?
					<AlertDialogCancel onClick={() => router.push('/')} className="bg-primary">No</AlertDialogCancel>
					<AlertDialogAction onClick={() => router.push('/reservation')} className="bg-primary">Yes</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}