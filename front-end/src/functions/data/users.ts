import 'server-only';
import { cache } from 'react';
import { serializeJSON } from '@/utils/serializeJSON';
import { getCurrentUser } from './auth';
import { GetUserById } from '@/lib/db/queries/users';

export const getProfile = cache(async () => {
  const session = await getCurrentUser();
  if (!session) {
    return null;
  }
  const userData = await GetUserById.execute({ id: session.user.id });
  return serializeJSON(userData);
});

export const getUser = cache(async (id: string) => {
  const userData = await GetUserById.execute({ id: id });
  return serializeJSON(userData);
});
