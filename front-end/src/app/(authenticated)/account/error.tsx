'use client'

import { useEffect } from "react"
import { Button } from "@/components/ui/buttons/button";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error)
	}, [error]);

	return (
		<div>
			<h1>Something went wrong</h1>
			<div>
				<Button onClick={reset}>Try again</Button>
			</div>
		</div>
	)
}