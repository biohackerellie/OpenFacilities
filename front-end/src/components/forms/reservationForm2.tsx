'use client';

import * as z from 'zod';
import React, { useState } from 'react';
import {
	Controller,
	useFieldArray,
	useForm,
	FormProvider,
} from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/buttons/button';
import useHandleAddDate from '@/components/hooks/useHandleAddDate';
import { ModalInput } from '@/components/forms/recurringModal';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment-timezone';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formSchema } from './schemas/reservationForm';


export default function ReservationForm() {
	const [isVisible, setIsVisible] = React.useState(false);
	const [selectedData, setSelectedData] = React.useState({});
	const hideModal = () => setIsVisible(false);
	let selectedBuilding = { label: 'Select a building', value: 0 };
	let selectedFacility = { label: 'Select a facility', value: 0 };
	let selectedCategory = { label: 'Pricing Category', value: 0 };

	const formatDate = (date: Date) => {
		return date.toISOString().split('T')[0];
	};
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			eventName: '',
			Category: selectedCategory,
			name: '',
			phone: '',
			email: '',
			startDate: '',
			events: [
				{
					startDate: formatDate(new Date()),
					startTime: moment().local().format('h:mm'),
					endTime: moment().local().format('h:mm'),
				},
			],
			details:
				'Please provide any additional details about your event including any special requests or needs, additional contact information, etc.',
			facility: selectedFacility,
			building: selectedBuilding,
			techSupport: false,
			techDetails: '',
			doorAccess: false,
			doorDetails: '',
		},
	});
	let control = form.control;

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'events',
		rules: { required: true },
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			console.log(values);
		} catch (error) {
			console.log(error);
		}
	}
	//@ts-expect-error
	const handleAddDate = useHandleAddDate(append, hideModal);
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name={'eventName'}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Event Name</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Event Name" {...field} />
							</FormControl>
							<FormDescription>Enter the name of your event.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ScrollArea className="h-[600px] w-[850px] rounded-md border p-4">
					{fields.map((field, index) => {
						return (
							<div
								key={field.id}
								className="flex flex-row   p-2 gap-2  grid-rows-6  justify-start sm:justify-between flex-wrap flex-shrink sm:flex-nowrap"
							>
								<FormField
									control={form.control}
									name={`events.${index}.startDate`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Start Date</FormLabel>
											<FormControl>
												<Input
													type="date"
													placeholder="Start Date"
													{...field}
												/>
											</FormControl>
											<FormDescription>
												Enter the start date of your event.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name={`events.${index}.startTime`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Start Time</FormLabel>
											<FormControl>
												<Input
													type="time"
													placeholder="Start Time"
													{...field}
												/>
											</FormControl>
											<FormDescription>
												Enter the start time of your event.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name={`events.${index}.endTime`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>End Time</FormLabel>
											<FormControl>
												<Input type="time" placeholder="End Time" {...field} />
											</FormControl>
											<FormDescription>
												Enter the end time of your event.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type="button"
									size="sm"
									className="self-center"
									onClick={() => remove(index)}
								>
									Delete Date
								</Button>
							</div>
						);
					})}
				</ScrollArea>
				<Button
					className="hover:cursor-pointer"
					size={'sm'}
					type="button"
					onClick={() =>
						append({
							startDate: formatDate(new Date()),
							startTime: moment().local().format('h:mm'),
							endDate: formatDate(new Date()),
							endTime: moment().local().format('h:mm'),
						})
					}
				>
					Add Date
				</Button>
				<ModalInput
					isVisible={isVisible}
					setIsVisible={setIsVisible}
					onSave={handleAddDate}
					//@ts-expect-error
					onClose={hideModal}
					selectedData={selectedData}
				/>
				<Button
					className="hover:cursor-pointer"
					size={'sm'}
					type="button"
					onClick={() => remove()}
				>
					Clear All
				</Button>
			</form>
		</Form>
	);
}
