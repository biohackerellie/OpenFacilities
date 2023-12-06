import React from 'react';
import { SubmitButton } from '@/components/ui/buttons/submitButton';
import { Email } from '@/functions/mutations/reset';

export default function ResetPassword() {
  return (
    <form action={Email} className="space-y-8">
      <h1 className="text-4xl font-bold ">Password Reset</h1>

      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Email address"
        className="placeholder:italic placeholder:text-slate-400 block border-slate-300 rounded-md py-2 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
      />
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
