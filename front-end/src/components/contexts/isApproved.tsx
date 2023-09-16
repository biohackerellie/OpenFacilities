//@ts-nocheck

'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  id: number;
}

export default function IsApproved({ children, id }: Props) {
  const [approvalStatus, setApprovalStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  try {
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`,
          { cache: 'no-store' }
        );
        const data = await res.json();

        setApprovalStatus(data.approved);
        setIsLoading(false);
      };
      fetchData();
    }, [id]);

    if (isLoading) {
      return null;
    }

    if (approvalStatus === 'approved') {
      return <> {children} </>;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
