'use client';

import React from 'react';
import { YellowButton } from './index';
import { Paid } from '@/functions/mutations';

export default function PaidButton({ id }: any) {
  return (
    <>
      <YellowButton onClick={() => Paid(id)}>Mark as paid</YellowButton>
    </>
  );
}
