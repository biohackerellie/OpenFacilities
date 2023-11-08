import React from 'react';
import { SubmitButton } from '@/components/ui/buttons/submitButton';
import { Email } from '@/functions/mutations/reset';

export default function ResetPassword() {
  return (
    <form action={Email} className="space-y-8">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <input type="email" name="email" id="email" required />
      <div>
        <p>
          If your email is registered with us, you will receive a password reset
          link.
        </p>
      </div>
      <SubmitButton />
    </form>
  );
}
