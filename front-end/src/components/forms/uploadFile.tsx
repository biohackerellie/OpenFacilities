//@ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { YellowButton } from '../ui/buttons';
import { Uploader } from '@/functions';

export function UploadFile({ params }: { params: { id: number } }) {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const id = params.id;

  async function handleUpload() {
    setIsUploading(true);
    try {
      await Uploader(file, id);
      router.refresh();
    } catch (error) {
      alert('something went wrong');
    } finally {
      setIsUploading(false);
    }
  }

  const [file, setFile] = useState(null);

  return (
    <div>
      <div>
        <div>
          <input
            type="file"
            accept=".pdf,.docx,.txt,.doc"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="p-2">
          <YellowButton
            name="submit"
            onClick={handleUpload}
            disabled={isUploading || !file}
          >
            {' '}
            Submit{' '}
          </YellowButton>
        </div>
      </div>
    </div>
  );
}
