'use client';
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

export default function RequestBadge() {
  useEffect(() => {
    async function fetchRequests() {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/request');
      const requests = await res.json();
      setRequestCount(requests.length);
    }
    fetchRequests();
  }, []);
  const [requestCount, setRequestCount] = useState(0);
  if (requestCount > 0) {
    return <Badge className="animate-pulse">{requestCount}</Badge>;
  }
  return null;
}
