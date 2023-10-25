'use client';
import { Loader2 } from 'lucide-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Button } from '@/components/ui/buttons/button';
import Reset from '@/functions/mutations/reset';
import { useRouter } from 'next/navigation';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	email: z.string().email({
		message: 'Please enter a valid email address',
	}),
});

export default function ResetPassword() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		try {
			await fetch(process.env.NEXT_PUBLIC_HOST + '/api/forgot', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});
			alert('check your email');
			router.push('/')
		} catch (error) {
			alert('something went wrong');
		}
		setIsLoading(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>
							<FormDescription>
								If your email is registered with us, you will receive a password
								reset link.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{!isLoading ? (
					<Button type="submit">Submit</Button>
				) : (
					<Button disabled>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					</Button>
				)}
			</form>
		</Form>
	);
}
