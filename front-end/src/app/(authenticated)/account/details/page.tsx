import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import React from 'react';
import AccountForm from './account-form';
import { Separator } from '@/components/ui/separator';

import { SelectUser } from '@/lib/db/schema';

export const dynamic = 'force-dynamic';

async function getData() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    throw new Error('User not found');
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/users/${user.id}`,
    {
      next: {
        tags: ['user'],
      },
    }
  );
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
