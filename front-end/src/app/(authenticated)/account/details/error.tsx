'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center align-middle m-5">
      <h2>You are not signed in</h2>
      <button
        onClick={() => {
          router.push('/login');
        }}
      >
        Login
      </button>
    </div>
  );
}
