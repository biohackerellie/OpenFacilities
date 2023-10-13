import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/buttons';

export default function UserResNav({ id }: { id: any }) {
	return (
		<div className="flex h-2 sm:h-5 items-center space-x-1 sm:space-x-4 text-md">
			<div>
				<Button asChild variant="ghost">
					<Link href={`/reservation/${id}`}>Summary</Link>
				</Button>
			</div>
			<Separator orientation="vertical" />
			<div className="hidden sm:inline-block">
				<Button asChild variant="ghost">
					<Link href={`/reservation/${id}/Insurance`}>Insurance</Link>
				</Button>
			</div>
			<Separator orientation="vertical" />
			<div>
				<Button asChild variant="ghost">
					<Link href={`/reservation/${id}/Pricing`}>Pricing & Payments</Link>
				</Button>
			</div>
		</div>
	);
}
