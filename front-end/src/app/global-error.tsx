'use client';

import { Button } from '@/components/ui/buttons';
import { useRouter } from 'next/navigation';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const redirect = () => {
    router.push('/account');
  };
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button onClick={() => redirect()}>Try again</Button>
      </body>
    </html>
  );
}
