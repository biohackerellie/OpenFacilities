'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { JiraModal } from '@/components/forms';
import type { SelectFacility as Facility } from '@/lib/db/schema';

import ReservationOptions from '@/components/ui/tables/reservations/reservation/options';

interface AdminPanelProps {
  id: number | bigint;
  facility: Facility | undefined;
}

export default function AdminPanel({ id, facility }: AdminPanelProps) {
  return (
    <div className="flex h-5 items-center space-x-4 text-md">
      <Separator orientation="vertical" />
      <div>
        <ReservationOptions id={id} facility={facility} />
      </div>
      <Separator orientation="vertical" />
      <div>
        <JiraModal />
      </div>
    </div>
  );
}
