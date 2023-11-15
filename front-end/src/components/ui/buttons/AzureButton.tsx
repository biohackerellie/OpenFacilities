'use client';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/buttons';

export default async function AzureButton() {
  return (
    <Button
      onClick={() => signIn('azure-ad', { callbackUrl: '/' })}
      size="lg"
      className="w-full"
    >
      Use District Staff Account
    </Button>
  );
}
