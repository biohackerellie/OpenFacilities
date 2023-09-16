'use client';

import { YellowButton, PurpleButton } from '../ui/buttons';
import React, { useState } from 'react';
import { PayinPerson } from '@/functions/mutations';
import { Checkout } from '@/functions/other';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function ShowPayment({ id }: { id: number }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inPerson = async (id: number) => {
    await PayinPerson(id);
    MySwal.fire({
      title: 'You have selected to pay in person',
      text: 'Please pay in person before your reservation date',
      icon: 'success',
      confirmButtonText: 'Close',
    });
  };
  const online = async (id: number) => {
    setIsSubmitting(true);
    try {
      await Checkout(id);
      MySwal.fire({
        title: 'You have selected to pay online',
        text: 'A checkout link has been sent to your accounts email address',
        icon: 'success',
        confirmButtonText: 'Close',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="flex m-2 gap-2">
        <div>
          <YellowButton onClick={() => inPerson(id)}>
            Pay in Person
          </YellowButton>
        </div>
        <div>
          <YellowButton onClick={() => online(id)} disabled={isSubmitting}>
            Pay Online
          </YellowButton>
          <p className="font-extralight italic">
            {' '}
            A Square checkout link will be sent to your account's email address{' '}
          </p>
        </div>
      </div>
    </>
  );
}
