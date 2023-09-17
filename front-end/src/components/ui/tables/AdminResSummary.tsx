import React from 'react';

import {
  approveReservation,
  denyReservation,
  HandleDelete,
} from '@/functions/reservations';
import { updateEmail } from '@/functions/emails';
import { multiChoiceAlert, Alert } from '../swals';
import { YellowButton } from '@/components/ui/buttons';
import moment from 'moment-timezone';
import { JiraModal } from '@/components/forms';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { DataTable } from './reservations/reservation/data-table';
import { columns } from '@/app/(authenticated)/admin/reservations/[id]/columns';

export const dynamic = 'force-dynamic';

type DateType = {
  Options?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  reservationId: number;
  id: any;
};

export default function AdminResSummary({
  id,
  name,
  doorAccess,
  doorsDetails,
  techSupport,
  techDetails,
  primaryContact,
  phone,
  details,
  fees,
  Category,
  User,
  ReservationDate,
}: any) {
  const email = User.email;

  const Delete = async (id: number) => {
    try {
      await HandleDelete(id);
      redirect('/admin/reservations');
    } catch (error) {
      alert('Error deleting reservation');
    } finally {
      revalidatePath(`/admin/reservations/${id}`);
    }
  };

  const handleApproveAll = () => {
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
        revalidatePath(`/admin/reservations/${id}`);
      },
      onDeny: async (id: any) => {
        await denyReservation(id);
        revalidatePath(`/admin/reservations/${id}`);
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
    revalidatePath(`/admin/reservations/${id}`);
  };

  const mappedDates = ReservationDate.map((date: DateType) => {
    return {
      Options: date.id,
      startDate: date.startDate,
      endDate: date.endDate,
      startTime: date.startTime,
      endTime: date.endTime,
      approved: date.approved,
      ReservationID: date.reservationId,
    };
  });
  console.log('mapped dates', mappedDates);

  const HandleEmail = async (id: number) => {
    try {
      await updateEmail(id);
      Alert('Email Sent', 'Your Email has been sent', 'success');
    } catch (error) {
      console.error('Error sending email:', error);
      Alert('Error', 'Error sending email', 'error');
    }
  };

  return (
    <div>
      <div className="flex  flex-col border-gray-700 dark:border-white  drop-shadow-md  max-w-[900px] m-3 p-4 border-2">
        <h2 className="flex font-bold text-4xl text-gray-600 dark:text-gray-300">
          {' '}
          Summary{' '}
        </h2>
        <div className="justify-between my-5  gap-36">
          <div className="flex flex-row  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            Primary Contact: {primaryContact} <div> {name}</div>
          </div>
          <div className="flex flex-row  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            Contact Number: <div>{phone}</div>
          </div>
          <div className="flex flex-row  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            Contact Email: <div>{email}</div>
          </div>
          <div className="flex flex-row  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            Requested Category:{' '}
            <div className="truncate overflow-ellipsis max-w-sm">
              {Category.name}
            </div>
          </div>
          <div className="flex flex-row my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify">
            Description:{' '}
            <div className="text-right ml-10 flex text-md text-ellipsis">
              {details}{' '}
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={mappedDates} />
        <div className="flex   justify-between">
          <div>
            <YellowButton onClick={handleApproveAll()}>
              {' '}
              Approve/Deny All Dates{' '}
            </YellowButton>
          </div>
          <div className="object-right self-center justify-center text-right">
            {/* <PurpleButton onClick={HandleEmail(id)}>
              Send Update Email
            </PurpleButton> */}
            <p className="italic text-xs font-light max-w-xs">
              Approving or denying individual dates does not send an email to
              the user. Click here to send them an update email.
            </p>
          </div>
          <div>
            {/* <RedButton onClick={Delete(id)}>Delete Reservation</RedButton> */}
          </div>
        </div>
        {techSupport && (
          <div className="flex flex-row my-10  justify-start gap-2 text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            <h1 className="font-bold text-red-500 drop-shadow-sm">
              Tech Support Requested{' '}
            </h1>
            Details:{' '}
            <div className="text-right ml-10 flex text-md text-ellipsis">
              {techDetails}
            </div>
          </div>
        )}
        <div>
          {doorAccess && (
            <div className="flex flex-row my-10  justify-start gap-2 text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify  ">
              <h1 className="font-bold text-red-500 drop-shadow-sm">
                Door Access Requested{' '}
              </h1>{' '}
              <div className="text-right ml-10 flex text-md text-ellipsis">
                {doorsDetails}
              </div>
            </div>
          )}
        </div>
        <JiraModal />
      </div>
    </div>
  );
}
