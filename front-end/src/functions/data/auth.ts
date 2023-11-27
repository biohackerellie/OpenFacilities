import { cache } from 'react';
import { cookies } from 'next/headers';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';

type User = {
  name: string;
  email: string;
  image?: string | undefined;
  roles: string;
  id: string;
};

class Session {
  constructor(user: User) {
    this.user = user;
  }
  user: {
    name: string;
    email: string;
    image?: string | undefined;
    roles?: string | undefined;
    id: string;
  };
  accessToken?: string | undefined;
}

export const getCurrentUser = cache(async () => {
  const session = await getServerSession(authOptions);
  const ServerSession = new Session(session?.user);

  return ServerSession;
});
