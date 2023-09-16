'use client';
import { signIn } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Error from 'next/error';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/buttons';

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const searchParams = useSearchParams();
  const callbackUrl = (searchParams.get('callbackUrl') as string) || '/';

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormValues({ email: '', password: '' });
    signIn('credentials', {
      email: formValues.email,
      password: formValues.password,
      callbackUrl: callbackUrl,
      onError: (error: Error) => {
        alert('error signing in');
        console.error(error);
      },
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    'form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';

  return (
    <form onSubmit={onSubmit} className="drop-shadow-md shadow-md">
      <div className="mb-6">
        <Button
          onClick={() => signIn('azure-ad', { callbackUrl: '/' })}
          size="lg"
          className="w-full"
        >
          Use District Staff Account
        </Button>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center drop-shadow-md font-semibold text-black dark:text-black mx-4 mb-0">
            OR
          </p>
        </div>
        <h1 className="text-center font-bold text-black mx4- mb-0 drop-shadow-md">
          Public User Sign In
        </h1>
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          className={`${input_style}`}
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: '#3446eb' }}
        className="inline-block px-7 my-4 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
      >
        "Sign In"
      </button>

      <div
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: '#55acee' }}
      >
        <Link href="/login/register">
          Don't have an account? Register here!
        </Link>
      </div>
    </form>
  );
}
