import 'server-only';
import { cache } from 'react';
import { GetReservations } from '@/lib/db/queries/reservations';
import { serializeJSON } from '@/utils/serializeJSON';

export const fetchReservations = cache(async () => {
  const res = await GetReservations.execute();
  return serializeJSON(res);
});
