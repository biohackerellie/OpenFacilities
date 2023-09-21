'use client';

import { Button } from '../ui/buttons';
import React, { useState } from 'react';
import { Payinperson } from '@/functions/mutations';
import { Checkout } from '@/functions/other';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function ShowPayment({ id }: { id: number }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inperson = async (id: number) => {
    await Payinperson(id);
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
          <Button onClick={() => inperson(id)}>Pay in Person</Button>
        </div>
        <div>
          <Button onClick={() => online(id)} disabled={isSubmitting}>
            Pay Online
          </Button>
          <p className="font-extralight italic">
            {' '}
            A Square checkout link will be sent to your account's email address{' '}
          </p>
        </div>
      </div>
    </>
  );
}
