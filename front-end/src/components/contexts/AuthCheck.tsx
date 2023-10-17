'use client';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return <> {children} </>;
	} else {
		return (
			<div className="justify-center align-middle mt-16 text-center flex flex-wrap flex-col">
				<h1 className="font-bold text-2xl">
					You must be logged in to view this page
				</h1>
				<h2 className="font-bold  text-xl">
					{' '}
					Click{' '}
					<button onClick={() => signIn()} className="text-blue-600">
						Here
					</button>{' '}
					to log in
				</h2>
			</div>
		);
	}
}
