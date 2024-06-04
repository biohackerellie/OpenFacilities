'use client';
import React, { useState } from 'react';
import type { SelectFacility as Facility } from '@/lib/db/schema';
import { Button } from '@/components/ui/buttons';
import { useToast } from '@/components/ui/use-toast';
import { updateEmail } from '@/functions/emails';
import { useRouter } from 'next/navigation';
import {
  approveReservation,
  denyReservation,
  HandleDelete,
} from '@/functions/reservations';
import { Loader2 } from 'lucide-react';

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
  id: number | bigint;
  facility: Facility | undefined;
}

export default function ReservationOptions({ id, facility }: ResNavProps) {
  const { toast } = useToast();

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async () => {
    try {
      await updateEmail(id as number);
      alert('Email sent');
    } catch (error) {
      alert('Email failed to send');
    }
  };

  const approveAll = async (id: number | bigint) => {
    setIsSubmitting(true);
    try {
      await approveReservation(id as number);
      toast({
        title: 'Reservation Approved',
        description: 'Reservation has been approved',
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Reservation failed to approve',
      });
    } finally {
      setIsSubmitting(false);
      router.refresh();
    }
  };

  const denyAll = async (id: number | bigint) => {
    setIsSubmitting(true);
    try {
      await denyReservation(id as number);
      toast({
        title: 'Reservation Denied',
        description: 'Reservation has been denied',
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Reservation failed to deny',
      });
    } finally {
      setIsSubmitting(false);
      router.refresh();
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
            {!isSubmitting ? (
              <AlertDialogTrigger>
                <span>Approve or Deny All</span>
              </AlertDialogTrigger>
            ) : (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            )}
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
          <DropdownMenuItem
            onClick={() => {
              HandleDelete(id as number);
              router.push('/admin/reservations');
            }}
          >
            Delete Reservation
          </DropdownMenuItem>
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
              approveAll(id);
            }}
          >
            Approve
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() => {
              denyAll(id);
            }}
          >
            Deny
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
