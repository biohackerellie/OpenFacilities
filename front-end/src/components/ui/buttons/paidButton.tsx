'use client';

import React from 'react';
import { Button } from './index';
import { Paid } from '@/functions/mutations';

export default function PaidButton({ id }: any) {
  return (
    <>
      <Button onClick={() => Paid(id)}>Mark as paid</Button>
    </>
  );
}
