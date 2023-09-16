'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { YellowButton, GreenButton, RedButton, PurpleButton } from '../buttons';
import {
  updateRes,
  updateEmail,
  approveReservation,
  denyReservation,
  approveDate,
  denyDate,
  HandleDelete,
} from '@/functions';
import { useApproveAll } from '@/components/hooks';
import { multiChoiceAlert, Alert } from '../swals';
import moment from 'moment-timezone';
import { JiraModal } from '@/components/forms';
import { GiCheckMark } from 'react-icons/gi';

export const dynamic = 'force-dynamic';

type DateType = {
  id: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isApproved: boolean;
  isDenied: boolean;
  isPending: boolean;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const email = User.email;

  const HandleApprove = async (id: number) => {
    setIsSubmitting(true);
    try {
      await approveDate(id);
      router.refresh();
    } catch (error) {
      alert('Error approving reservation');
    } finally {
      setIsSubmitting(false);
    }
  };

  const Delete = async (id: number) => {
    setIsSubmitting(true);
    try {
      await HandleDelete(id);
      router.push('/admin/reservations');
    } catch (error) {
      alert('Error deleting reservation');
    } finally {
      setIsSubmitting(false);
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
        router.refresh();
      },
      onDeny: async (id: any) => {
        await denyReservation(id);
        router.refresh();
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
    router.refresh();
  };

  const HandleDeny = async (id: number) => {
    setIsSubmitting(true);
    try {
      await denyDate(id);
      router.refresh();
    } catch (error) {
      alert('Error denying reservation');
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isEdit, setIsEdit] = useState<{ [dateId: number]: boolean }>({});
  const handleSave = async (
    dateID: number,
    {
      id,
      startDate,
      endDate,
      startTime,
      endTime,
    }: {
      id: number;
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
    }
  ) => {
    setIsSubmitting(true);
    try {
      await updateRes({
        id: id,
        dateID: dateID,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
      });

      router.refresh();
      setIsEdit({ ...isEdit, [dateID]: false });
    } catch (error) {
      alert('Error updating reservation');
    } finally {
      setIsSubmitting(false);
    }
  };
  const HandleEmail = async (id: number) => {
    try {
      await updateEmail(id);
      Alert('Email Sent', 'Your Email has been sent', 'success');
    } catch (error) {
      console.error('Error sending email:', error);
      Alert('Error', 'Error sending email', 'error');
    }
  };

  const [dates, setDates] = useState<DateType[]>([]);

  useEffect(() => {
    setDates(
      ReservationDate.sort(
        (a: any, b: any) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      ).map((date: any) => ({
        isApproved: date.approved === 'approved',
        isDenied: date.approved === 'denied',
        isPending: date.approved === 'pending',
        id: date.id,
        startDate: date.startDate,
        endDate: date.endDate,
        startTime: date.startTime,
        endTime: date.endTime,
      }))
    );
  }, [ReservationDate]);

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
        <div className="justify-between   ">
          {ReservationDate.length > 0 &&
            dates.map((date, index) => {
              return (
                <div
                  key={date.id}
                  className="flex border-b-2 border-b-gray-700 dark:border-b-white my-2 py-2 col-span-full justify-between w-full gap-3"
                >
                  {isEdit[date.id] ? (
                    <>
                      <div>
                        <label htmlFor="start-date">Start Date</label>
                        <input
                          type="date"
                          value={date.startDate}
                          onChange={(e) => {
                            const newDates = [...dates];
                            newDates[index].startDate = e.target.value;
                            setDates(newDates);
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="end-date">End Date</label>
                        <input
                          type="date"
                          value={date.endDate}
                          onChange={(e) => {
                            const newDates = [...dates];
                            newDates[index].endDate = e.target.value;
                            setDates(newDates);
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="start-time">Start Time</label>
                        <input
                          type="time"
                          value={date.startTime}
                          onChange={(e) => {
                            const newDates = [...dates];
                            newDates[index].startTime = e.target.value;
                            setDates(newDates);
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="end-time">End Time</label>
                        <input
                          type="time"
                          value={date.endTime}
                          onChange={(e) => {
                            const newDates = [...dates];
                            newDates[index].endTime = e.target.value;
                            setDates(newDates);
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        Start Date: <div />{' '}
                        {moment(date.startDate).format('M/DD/YYYY')}
                      </div>
                      <div>
                        End Date: <div />{' '}
                        {moment(date.endDate).format('M/DD/YYYY')}
                      </div>
                      <div>
                        Start Time: <div />{' '}
                        {moment(date.startDate + ' ' + date.startTime).format(
                          'h:mm a'
                        )}
                      </div>
                      <div>
                        End Time: <div />{' '}
                        {moment(date.endDate + ' ' + date.endTime).format(
                          'h:mm a'
                        )}
                      </div>
                    </>
                  )}
                  {date.isApproved && !isEdit[date.id] && (
                    <>
                      <div>
                        Status: <div /> Approved
                      </div>
                      <div>
                        <RedButton
                          onClick={() => HandleDeny(date.id)}
                          disabled={isSubmitting}
                        >
                          Deny
                        </RedButton>
                      </div>
                    </>
                  )}
                  {date.isDenied && !isEdit[date.id] && (
                    <>
                      <div>
                        Status: <div /> Denied
                      </div>
                      <div>
                        <GreenButton
                          onClick={() => HandleApprove(date.id)}
                          disabled={isSubmitting}
                        >
                          Approve
                        </GreenButton>
                      </div>
                    </>
                  )}
                  {date.isPending && !isEdit[date.id] && (
                    <>
                      <div>
                        <GreenButton
                          onClick={() => HandleApprove(date.id)}
                          disabled={isSubmitting}
                        >
                          Approve
                        </GreenButton>
                      </div>
                      <div>
                        <RedButton
                          onClick={() => HandleDeny(date.id)}
                          disabled={isSubmitting}
                        >
                          Deny
                        </RedButton>
                      </div>
                    </>
                  )}
                  {!isEdit[date.id] && (
                    <div>
                      <YellowButton
                        onClick={() =>
                          setIsEdit({ ...isEdit, [date.id]: true })
                        }
                      >
                        Edit
                      </YellowButton>
                    </div>
                  )}
                  {isEdit[date.id] && (
                    <div>
                      <YellowButton
                        onClick={() =>
                          handleSave(date.id, {
                            id: id,
                            startDate: date.startDate,
                            endDate: date.endDate,
                            startTime: date.startTime,
                            endTime: date.endTime,
                          })
                        }
                        disabled={isSubmitting}
                      >
                        Save
                      </YellowButton>
                      <YellowButton
                        onClick={() =>
                          setIsEdit({ ...isEdit, [date.id]: false })
                        }
                      >
                        Cancel
                      </YellowButton>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <div className="flex   justify-between">
          <div>
            <YellowButton onClick={() => handleApproveAll()}>
              {' '}
              Approve/Deny All Dates{' '}
            </YellowButton>
          </div>
          <div className="object-right self-center justify-center text-right">
            <PurpleButton onClick={() => HandleEmail(id)}>
              Send Update Email
            </PurpleButton>
            <p className="italic text-xs font-light max-w-xs">
              Approving or denying individual dates does not send an email to
              the user. Click here to send them an update email.
            </p>
          </div>
          <div>
            <RedButton onClick={() => Delete(id)}>Delete Reservation</RedButton>
          </div>
        </div>
        {techSupport && (
          <div className="flex flex-row my-10  justify-start gap-2 text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            <h1 className="font-bold text-red-500 drop-shadow-sm">
              Tech Support Requested{' '}
            </h1>
            <div>
              {' '}
              <GiCheckMark />{' '}
            </div>{' '}
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
              <GiCheckMark /> Details:{' '}
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
