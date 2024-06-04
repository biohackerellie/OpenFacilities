import { cookies } from 'next/headers';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import { SelectKey_User_role } from '@/lib/db/schema';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | undefined;
  roles: string;
}

const adminRoles = [
  'CAL_ADMIN',
  'ADMIN_ADMIN',
  'GR_ADMIN',
  'LHS_ADMIN',
  'LMS_ADMIN',
  'WE_ADMIN',
  'SO_ADMIN',
  'SUP_ADMIN',
];

class Session {
  constructor(user: User) {
    this.user = user;
  }
  user: {
    name: string;
    email: string;
    image?: string | undefined;
    roles: string;
    id: string;
  };
  accessToken?: string | undefined;
  isAdmin() {
    return adminRoles.includes(this.user.roles);
  }
}

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);
  const ServerSession = new Session(session?.user);

  return ServerSession;
};
