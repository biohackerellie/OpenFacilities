import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { JiraModal } from '@/components/forms';
import { Facility } from '@/lib/types';
import { Button } from '@/components/ui/buttons';
import ReservationOptions from '@/components/ui/tables/reservations/reservation/options';
import dynamic from 'next/dynamic';

interface ResNavProps {
  id: number;
  facility: Facility;
}

export default function ResNav({ id, facility }: ResNavProps) {
  return (
    <div className="flex h-5 items-center space-x-4 text-md">
      <div>
        <Button asChild variant="ghost">
          <Link href={`/admin/reservations/${id}`}>Summary</Link>
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button asChild variant="ghost">
          <Link href={`/admin/reservations/${id}/Insurance`}>Insurance</Link>
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button asChild variant="ghost">
          <Link href={`/admin/reservations/${id}/Pricing`}>
            Pricing & Payments
          </Link>
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        {/* ts-expect-error */}
        <ReservationOptions id={id} facility={facility} />
      </div>
      <Separator orientation="vertical" />
      <div>
        <JiraModal />
      </div>
    </div>
  );
}
