'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/buttons';

import { Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';

export function UploadFile({ params }: { params: { id: number } }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  console.log(inputFileRef);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    if (!inputFileRef.current?.files) {
      throw new Error('no file selected');
    }
    const file = inputFileRef.current.files[0];

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
/**
 * https://tqhpkz4oxpax9gag.public.blob.vercel-storage.com/CORS%20Plugin%20-%20ElysiaJS%20ElysiaJS-xH8CbBAPcEXLLZ88rpqIVga2EfWufV.pdf
 * https://tqhpkz4oxpax9gag.public.blob.vercel-storage.com/CORS%2520Plugin%2520-%2520ElysiaJS%2520ElysiaJS-xH8CbBAPcEXLLZ88rpqIVga2EfWufV.pdf
 */
