'use client';
import { approveReservation, denyReservation } from '@/functions/reservations';
import { multiChoiceAlert } from '../ui/alerts';
import { revalidatePath } from 'next/cache';

export default async function ApproveAll(id: number, path: string) {
  multiChoiceAlert({
    title: 'Confirm or Deny All Dates',
    id: id,
    text: 'If Confirmed, all requested dates will be added, if denied, all dates will be removed.',
    icon: 'warning',
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonText: 'Yes, approve request!',
    denyButtonText: 'No, deny request!',
    cancelButtonText: 'Cancel',
    onConfirm: async (id: any) => {
      await approveReservation(id);
    },
    onDeny: async (id: any) => {
      await denyReservation(id);
    },
    onConfirmText: {
      title: 'Approved!',
      text: 'The request has been approved.',
      icon: 'success',
    },
    onDenyText: {
      title: 'Denied',
      text: 'The request has been denied.',
      icon: 'error',
    },
  });
}
