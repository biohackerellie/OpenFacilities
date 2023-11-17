'use client';
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import RequestCount from '@/functions/calculations/requestCount';

export default function RequestBadge() {
  const [requestCount, setRequestCount] = useState<number>(0);

  useEffect(() => {
    const fetchRequestCount = async () => {
      const count = await RequestCount();
      setRequestCount(count);
    };

    fetchRequestCount();
  }, []);

  if (requestCount === 0) {
    return null;
  }
  return <Badge className="animate-pulse">{requestCount}</Badge>;
}
