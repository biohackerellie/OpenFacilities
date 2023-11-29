import { getCurrentUser } from '@/functions/data/auth';

export default async function isUserAdmin() {
  const user = await getCurrentUser();
  if (user) {
    return user.admin;
  }
  return false;
}
