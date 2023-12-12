'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/buttons';

import { Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';

export function UploadFile({ params }: { params: { id: number } }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let file: File | null = null;
  if (inputFileRef.current?.files && inputFileRef.current?.files[0]) {
    file = inputFileRef.current.files[0];
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    if (!file) {
      throw new Error('No file selected');
    }

    const response = await fetch(
      `/api/files/upload?filename=${file.name}&id=${params.id}`,
      {
        method: 'POST',
        body: file,
      }
    );
    const result = await response.json();
    if (result.error) {
      alert(result.error);
    } else {
      alert('File uploaded successfully!');
    }
    setLoading(false);
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" ref={inputFileRef} accept=".pdf,.docx,.txt,.doc" />
        </div>
        <div className="p-2">
          {loading ? (
            <Button disabled={true}>
              <Loader2 className="animate-spin" />
              uploading...
            </Button>
          ) : (
            <Button>Upload</Button>
          )}
        </div>
      </form>
    </div>
  );
}
