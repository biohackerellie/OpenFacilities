import React from 'react';
import LoadingScreen from '@/components/ui/loadingScreen';
import dynamic from 'next/dynamic';

const CalendarMain = dynamic(() => import('@/components/calendar/Calendar'), {
	loading: () => <LoadingScreen />,
});

export default function Page() {
	return (
		<div className="mt-16">
			<CalendarMain />
		</div>
	);
}
