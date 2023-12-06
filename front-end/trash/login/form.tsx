'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';

import { Button } from '@/components/ui/buttons';
import { Input } from '@/components/ui/input';

async function Login(formData: FormData) {
  try {
    signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      callbackUrl: '/',
    });
  } catch (error) {
    alert('something went wrong');
  }
}

export default function LoginForm() {
  return (
    <div className="drop-shadow-md shadow-lg p-4 bg-gray-100">
      <Button
        onClick={() => signIn('azure-ad', { callbackUrl: '/' })}
        size="lg"
        className="w-full shadow"
      >
        Use District Staff Account
      </Button>
      <form action={Login}>
        <div className="mb-6">
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center drop-shadow-md font-semibold text-black dark:text-black mx-4 mb-0">
              OR
            </p>
          </div>
          <h1 className="text-center font-bold text-black mx4- mb-0 drop-shadow-md">
            Public User Sign In
          </h1>
          <Input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="mb-6">
          <Input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Link
            className="text-blue-500 hover:underline hover:cursor-pointer italic text-sm"
            href="/login/reset"
          >
            Forgot my password
          </Link>
        </div>
        <Button type="submit" variant="outline" className="  w-full">
          "Sign In"
        </Button>

        <Button
          asChild
          variant="outline"
          className="mt-2 justify-center self-center align-middle sm:font-medium font-light w-auto"
        >
          <Link href="/login/register" className="w-2/3">
            Don't have an account? Register here!
          </Link>
        </Button>
      </form>
    </div>
  );
}
