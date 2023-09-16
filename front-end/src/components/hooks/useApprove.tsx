'use client';
import { approveReservation, denyReservation } from '@/functions/reservations';
import { multiChoiceAlert } from '../ui/swals';

export default async function useApproveAll(id: number) {
  multiChoiceAlert({
    title: 'Confirm or Deny All Dates',
    id: id,
    text: 'If Confirmed, all requested dates will be added, if denied, all dates will be removed.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, approve request!',
    denyButtonText: 'No, deny request!',
    cancelButtonText: 'Cancel',
    onConfirm: async (id: any) => {
      await approveReservation(id);
      location.reload;
    },
    onDeny: async (id: any) => {
      await denyReservation(id);
      location.reload;
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
