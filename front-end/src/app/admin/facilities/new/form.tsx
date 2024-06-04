'use client';

import { SubmitButton } from '@/components/ui/buttons/submitButton';
import { buildingNames } from '@/lib/types/constants';
import newFacility from './actions';
//@ts-expect-error
import { useFormState } from 'react-dom';
import { useState } from 'react';
import Image from 'next/image';

const inputStyle =
  ' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ';

const initialState = {
  message: null,
};

export default function NewFacilityForm() {
  const [state, formAction] = useFormState(newFacility, initialState);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file?.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setImagePreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <form action={formAction}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={inputStyle}
          required
        />
        <label htmlFor="building">Building</label>
        <select name="building" id="building" required className={inputStyle}>
          {buildingNames.map((building, index) => (
            <option key={index} value={building}>
              {building}
            </option>
          ))}
        </select>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          className={inputStyle}
          required
        />
        <label htmlFor="capacity">Capacity</label>
        <input
          type="number"
          name="capacity"
          id="capacity"
          placeholder="Capacity"
          className={inputStyle}
        />
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept=".jpg, .png"
            onChange={handeFileChange}
            className=" w-full text-sm text-slate-500
					file:mr-4 file:py-2 file:px-4
					file:rounded-full file:border-0
					file:text-sm file:font-semibold
					file:bg-violet-50 file:text-violet-700
					hover:file:bg-violet-100"
          />
          {imagePreview && (
            <Image
              src={imagePreview}
              width={400}
              height={400}
              alt="Image Preview"
            />
          )}
        </div>
        <label htmlFor="category1">Category 1 Price per hour</label>
        <input
          type="number"
          name="category1"
          id="category1"
          placeholder="Category 1 Price"
          className={inputStyle}
          defaultValue={0}
        />
        <label htmlFor="category2">Category 2 Price per hour</label>
        <input
          type="number"
          name="category2"
          id="category2"
          placeholder="Category 2 Price"
          className={inputStyle}
          defaultValue={0}
        />
        <label htmlFor="category3">Category 3 Price per hour</label>
        <input
          type="number"
          name="category3"
          id="category3"
          placeholder="Category 3 Price"
          className={inputStyle}
          defaultValue={0}
        />
        <label htmlFor="googlecalid">Google Calendar ID</label>
        <input
          type="text"
          name="googlecalid"
          id="googlecalid"
          placeholder="Google Calendar ID"
          className={inputStyle}
          required
        />
        <SubmitButton variant="outline">Create</SubmitButton>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </div>
  );
}
