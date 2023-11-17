import { cache } from 'react';
import { cookies } from 'next/headers';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';

export const getCurrentUser = cache(async () => {
  const session = await getServerSession(authOptions);
  console.log('session', session);
  return session;
});
