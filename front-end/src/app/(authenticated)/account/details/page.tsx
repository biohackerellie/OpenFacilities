import React from 'react';
import AccountForm from './account-form';
import { Separator } from '@/components/ui/separator';
import { headers } from 'next/headers';

import { SelectUser } from '@/lib/db/schema';

async function getData() {
  const headersInstance = headers();
  const user = headersInstance.get('user') as string;
  const auth = headersInstance.get('Cookie') as string;
  if (!user) {
    throw new Error('User not found');
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/${user}`, {
    headers: {
      Cookie: auth,
    },
    next: {
      tags: ['user'],
    },
  });
  return res.json();
}

export default async function DetailsPage() {
  const data: SelectUser = await getData();
  const updateUserValues = {
    id: data.id,
    name: data.name,
    email: data.email,
  };
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account Details</h3>
        <p className="text-muted-foreground">Change your account details</p>
      </div>
      <Separator />
      <AccountForm data={updateUserValues} />
    </div>
  );
}