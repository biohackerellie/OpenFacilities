import React from 'react';
import { SubmitButton } from '@/components/ui/buttons/submitButton';
import {
  uploadImage,
  updateFacilityName,
  deleteFacility,
  updateCategoryPrices,
  updateCapaciaty,
} from './actions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FormProps {
  id: number;
  name?: string;
  capacity?: number;
  CategoryIDs?: {
    id: number;
    name: string;
    price: number;
  }[];
}

const inputStyle =
  ' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ';

const ImageUploadForm = ({ id }: FormProps) => {
  const uploadWithParam = uploadImage.bind(null, id);
  return (
    <>
      <form action={uploadWithParam} className="flex">
        <label htmlFor="file">Change Image</label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .png"
          className=" w-full text-sm text-slate-500
					file:mr-4 file:py-2 file:px-4
					file:rounded-full file:border-0
					file:text-sm file:font-semibold
					file:bg-violet-50 file:text-violet-700
					hover:file:bg-violet-100"
        />
        <SubmitButton variant="outline">Upload</SubmitButton>
      </form>
    </>
  );
};

const FacilityNameForm = ({ id, name }: FormProps) => {
  const updateWithParam = updateFacilityName.bind(null, id);
  console.log('name: ', name);
  return (
    <>
      <form action={updateWithParam}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={name}
          placeholder={name}
          className={inputStyle}
        />
        <SubmitButton variant="outline">Update</SubmitButton>
      </form>
    </>
  );
};

const UpdatePricesForm = ({ CategoryIDs }: FormProps) => {
  return (
    <>
      {CategoryIDs?.map((category, index) => (
        <div key={index}>
          <form action={updateCategoryPrices} className="gap-y-4 my-4">
            <label htmlFor="Category" className="text-ellipsis overflow-hidden">
              {category.name}
            </label>
            <input type="hidden" name="id" id="id" value={category.id} />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              defaultValue={category.price}
              className={inputStyle}
            />
            <SubmitButton variant="outline">Update</SubmitButton>
          </form>
        </div>
      ))}
    </>
  );
};

const UpdateCapacityForm = ({ id, capacity }: FormProps) => {
  const updateCapaciatywithID = updateCapaciaty.bind(null, id);
  return (
    <>
      <form action={updateCapaciatywithID}>
        <label htmlFor="capacity">Capacity</label>
        <input
          type="number"
          name="capacity"
          id="capacity"
          defaultValue={capacity}
          className={inputStyle}
        />
        <SubmitButton variant="outline">Update</SubmitButton>
      </form>
    </>
  );
};

export default function Forms({ id, name, capacity, CategoryIDs }: FormProps) {
  return (
    <div className="flex flex-col my-2 gap-8">
      <div className="flex flex-row">
        <ImageUploadForm id={id} />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">Facility Name</AccordionTrigger>
          <AccordionContent>
            <FacilityNameForm id={id} name={name} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-full">Capacity</AccordionTrigger>
          <AccordionContent>
            <UpdateCapacityForm id={id} capacity={capacity} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-full">Prices</AccordionTrigger>
          <AccordionContent>
            <UpdatePricesForm id={id} CategoryIDs={CategoryIDs} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
