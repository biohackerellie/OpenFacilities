'use server';
import { getRequests } from '@/functions/data/requests';

export default async function RequestCount() {
  let requestCount = 0;

  const requests = await getRequests();
  for (const request of requests) {
    requestCount++;
  }

  return Number(requestCount);
}
