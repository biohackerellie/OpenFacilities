import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { dayOptions } from '@/lib/formOptions';

import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { Button } from '../ui/buttons';
export const ModalInput = (props: { onSave: (data: any) => void }) => {
  const { isVisible, setIsVisible, onSave } = props;

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const forwardChange = (data: any) => {
    onSave(data);
    dialogClose();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:cursor-pointer h-8"
          variant="outline"
          size={'sm'}
        >
          Add Reoccurring Dates
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="items-center place-content-center   justify-center flex flex-col">
          <form onSubmit={handleSubmit(forwardChange)}>
            <div className="border-b-2 gap-2 my-2 p-2 ">
              <Label className="font-Bold">Start Date</Label>

              <Input
                className="form-date bg-gray-300 hover:bg-gray-200 text-black"
                type="date"
                {...register('startDate')}
              />
            </div>
            <div className="border-b-2 gap-2 my-2 p-2">
              <Label className="label">Event start time? </Label>
              <Input
                type="time"
                className="form-date bg-gray-300 hover:bg-gray-200 my-2 text-black"
                {...register('startTime')}
              />
            </div>
            <div>
              <div className="border-b-2 gap-2 my-2 p-2">
                <Label className="label">Event end time? </Label>
                <Input
                  type="time"
                  className="form-date bg-gray-300 hover:bg-gray-200 text-black"
                  {...register('endTime')}
                />
              </div>
              <div className="border-b-2 gap-2 my-2 p-2">
                <Label className="label">Day of the Week</Label>
                <div className="control">
                  <Controller
                    name="dayOfWeek"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={dayOptions}
                        isMulti
                        required
                      />
                    )}
                  />
                </div>
              </div>
              <div className="border-b-2 gap-2 my-2 p-2">
                <Label className="label">Repeat Until</Label>
                <div className="control">
                  <Input
                    type="date"
                    className="form-date bg-gray-300 hover:bg-gray-200 text-black"
                    {...register('repeatUntil')}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    className="h-10"
                    onClick={handleSubmit(forwardChange)}
                  >
                    Save
                  </Button>
                </DialogClose>
              </DialogFooter>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
