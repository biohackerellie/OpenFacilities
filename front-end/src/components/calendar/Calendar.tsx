//@ts-nocheck
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactModal from 'react-modal';
import { CalendarInfo } from '../ui';
import { Events } from '@prisma/client';
import { useTheme } from 'next-themes';
import { Button } from '../ui/buttons';
import { Separator } from '@/components/ui/separator';

const localizer = momentLocalizer(moment);

const buildingColors: any = {
	'West Elementary': 'purple',
	'South Elementary': 'blue',
	'Laurel Middle School': 'green',
	'Laurel High School': 'skyblue',
	'Graff Elementary': 'slate',
	'Administration Building': 'orange',
};

function EventComponent({ event }: { event: Events }) {
	return (
		<div
			className={`rbc-event-content ${buildingColors[event.building]
				} rbc-event-label`}
			title={event.title}
		>
			{event.title}
		</div>
	);
}

export default function CalendarMain() {



	const [selectedEvent, setSelectedEvent] = useState(null);
	const [events, setEvents] = useState([]);

	const { theme } = useTheme();

	const isDarkMode = theme === 'dark';
	const calendarStyle = {
		height: 800,
		width: '100%',
		border: 5,
		...(isDarkMode && {
			WebkitTextFillColor: 'white',
			WebkitTextStrokeColor: 'white',
		}),
	};

	useEffect(() => {
		const fetchEvents = async () => {
			const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/events');
			const fetchedEvents = await res.json();
			console.log('fetch', fetchedEvents);
			setEvents(
				fetchedEvents.map((event) => ({
					title: event.title,
					start: new Date(event.start),
					end: new Date(event.end),
					building: event.Facility.building,
					facility: event.Facility.name,
				}))
			);
		};

		fetchEvents();
	}, []);

	useEffect(() => {
		if (selectedEvent) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
	}, [selectedEvent]);



	return (
		<div>

			<div className=" h-screen block   items-center   mx-auto p-[10px]  align-center  ">
				<div className="drop-shadow-md ">
					<Calendar
						localizer={localizer}
						events={events}
						onSelectEvent={(event) => setSelectedEvent(event)}
						popup
						eventPropGetter={(event, start, end, isSelected) => ({
							style: {
								backgroundColor: buildingColors[event.building],
							},
						})}
						startAccessor="start"
						endAccessor="end"
						// className="z-0 bg-transparent  font-normal m-auto border-solid border-4 backdrop-blur-lg object-center rounded-lg max-h-auto sm:max-h-auto    text-black max-w-[1080px] dark:text-white"
						style={calendarStyle}
						components={{
							event: EventComponent,
						}}
					/>
				</div>
				<div className="items-center align-middle justify-center drop-shadow-md">
					<ReactModal
						isOpen={!!selectedEvent}
						onRequestClose={() => setSelectedEvent(null)}
						className="fixed inset-0 flex items-center text-black dark:text-black justify-center z-50 transition-opacity ease-out duration-500"
						overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
					>
						<div className="bg-white rounded-lg p-8">
							<h3 className="text-xl font-bold mb-4">{selectedEvent?.title}</h3>
							<h4 className="text-lg mb-2">{selectedEvent?.building}</h4>
							<h4 className="text-lg mb-2">{selectedEvent?.facility}</h4>
							<p className="mb-2">
								{' '}
								Starts at {selectedEvent?.start.toLocaleString()}
							</p>
							<p className="mb-4">
								{' '}
								Ends at {selectedEvent?.end.toLocaleString()}
							</p>
							<button
								className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
								onClick={() => setSelectedEvent(null)}
							>
								Close
							</button>
						</div>
					</ReactModal>
				</div>
			</div>
		</div>
	);
}
