import { serializeJSON } from '@/utils/serializeJSON';
import 'server-only';
import { GetRequests } from '@/lib/db/queries/reservations';

export const getRequests = async () => {
  const data = await GetRequests.execute();
  return serializeJSON(data);
};
