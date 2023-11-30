import 'server-only';
import { cache } from 'react';
import {
  GetReservations,
  GetReservationbyID,
  GetAllReservations,
} from '@/lib/db/queries/reservations';
import { serializeJSON } from '@/utils/serializeJSON';

export const fetchReservations = cache(async () => {
  const res = await GetReservations.execute();
  return serializeJSON(res);
});

export const fetchReservation = cache(async (id: number) => {
  const res = await GetReservationbyID.execute({ id: id });
  return serializeJSON(res);
});

export const getAllReservations = cache(async () => {
  const res = await GetAllReservations.execute();
  return serializeJSON(res);
});
