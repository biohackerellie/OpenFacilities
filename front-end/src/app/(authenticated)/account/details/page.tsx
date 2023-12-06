import React from 'react';
import AccountForm from './account-form';
import { Separator } from '@/components/ui/separator';

import { getProfile } from '@/functions/data/users';

export default async function DetailsPage() {
  const data = await getProfile();
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
