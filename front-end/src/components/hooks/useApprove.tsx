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
import { revalidatePath } from 'next/cache';

export default async function ApproveAll(id: number, path: string) {
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
            revalidatePath(path);
          }}
        >
          Approve
        </AlertDialogAction>
        <AlertDialogAction
          onClick={() => {
            denyReservation(id);
            revalidatePath(path);
          }}
        >
          Deny
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>;
}
