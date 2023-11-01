//@ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '../ui/buttons';
import { Loader2 } from 'lucide-react';
import { revalidatePath } from 'next/cache'


export function UploadFile({ params }: { params: { id: number } }) {
	const [isUploading, setIsUploading] = useState(false);
	const router = useRouter();
	const [file, setFile] = useState(null);
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};
	const id = params.id;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!file) return;

		setIsUploading(true);

		const formData = new FormData();
		formData.append('file', file);
		formData.append('id', id);

		console.log('client file', file);
		try {
			const response = await fetch('/api/files?path=/reservation/[id]/insurance', {

				method: 'POST',
				body: formData,
			});
			const data = await response.json();
			console.log('client data', data);
		} catch (error) {
			alert('something went wrong');
		} finally {
			setIsUploading(false);
			location.reload();
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="file"
						accept=".pdf,.docx,.txt,.doc"
						onChange={handleFileChange}
					/>
				</div>
				<div className="p-2">
					{isUploading ? (
						<Button disabled>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Uploading...
						</Button>
					) : (
						<Button name="submit" type="submit" disabled={!file}>
							Upload
						</Button>
					)}
				</div>
			</form>
		</div>
	);
}
