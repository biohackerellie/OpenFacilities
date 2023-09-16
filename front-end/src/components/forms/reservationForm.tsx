//@ts-nocheck
'use client';
import React, { useEffect } from 'react';
import { YellowButton, PurpleButton } from '@/components/ui/buttons';
import { createReservation } from '@/functions/reservations';
import { ModalInput } from '@/components/forms/recurringModal';
import { useFacilities, useHandleAddDate } from '@/components/hooks';
import { IFormInput } from '@/lib/types';
import styles from './styles';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Controller,
  useFieldArray,
  useForm,
  FormProvider,
} from 'react-hook-form';
import Swal from 'sweetalert2';

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    methods,
    errors,
    setError,
  } = useForm<IFormInput>();

  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: 'events',
      rules: {
        required: true,
      },
    },
    { control, name: 'reoccurring events' }
  );
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState({});
  const [techSupport, setTechSupport] = React.useState(false);
  const [doorAccess, setDoorAccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  useEffect(() => {
    if (fields.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [fields]);
  const hideModal = () => setIsVisible(false);
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleAddDate = useHandleAddDate(append, hideModal);

  const onSubmit = async (data: IFormInput) => {
    setIsSubmitting(true);
    try {
      await createReservation(data);

      Swal.fire({
        title: 'Success!',
        text: 'Your request has been submitted',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Create Another Request? ',
        cancelButtonText: 'Return to Home Page',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          window.location.href = '/';
        }
      });
    } catch (errors) {
      alert('Something went wrong', errors);
      console.log(errors);
    } finally {
      setIsSubmitting(false);
    }
  };
  const {
    buildings,
    filteredFacilities,
    facilityCategories,
    handleBuildingSelect,
    handleFacilitySelect,
  } = useFacilities();

  const { data: session } = useSession();
  const email = session?.user?.email;
  const searchParams = useSearchParams();
  const facilityBuilding = searchParams.get('facilityBuilding');
  const facilityName = searchParams.get('facilityName');

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col bg-white shadow-2xl flex-wrap border-4  h-full w-auto max-w-4xl  items-center  justify-center p-3 m-7 mb-10 mx-20 gap-5">
        <h1 className="text-black  drop-shadow-lg text-2xl font-bold ">
          {' '}
          Application
        </h1>
        <form
          //@ts-expect-error
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col bg-white sm:grid sm:grid-cols-3 grid-flow-row gap-1 gap-y-5 flex-wrap py-2 my-2 overflow-auto">
            <div className=" border-b-2 flex-shrink sm:col-span-3 flex flex-wrap justify-between">
              <div className=" col-start-1 col-span-1 ">
                <input
                  className={styles.input}
                  {...register('eventName', { required: true, maxLength: 256 })}
                />
                <label className={styles.label}>
                  Event Title <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
            <div className="col-start-1 flex flex-wrap sm:flex-nowrap col-span-3 border-b-2 items-center justify-between my-5  gap-5 p-3">
              <div>
                <input
                  className={styles.input}
                  {...register('name', { required: true })}
                />
                <label className="text-black text-lg font-bold">
                  Primary Contact Name <span className="text-red-500">*</span>
                </label>
              </div>
              <div>
                <input
                  className={styles.input}
                  {...register('phone', { required: true })}
                />
                <label className={styles.label}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="justify-center align-middle mt-8">
                <input
                  className={styles.input}
                  {...register('email')}
                  required
                  defaultValue={email}
                />
                <label className="text-black text-lg font-bold">
                  Email <span className="text-red-500">*</span>
                  <p className="italic font-light flex text-xs">
                    Must be the email address associated with your account
                  </p>
                </label>
              </div>
            </div>
            <div className="col-start-1 border-b-2  col-end-3">
              <textarea
                className={styles.textArea}
                {...register('details')}
                placeholder="Please provide any additional details about your event including any special requests or needs, additional contact information, etc."
              />
              <label className={styles.label}>Event Description</label>
            </div>

            <div className="col-start-1 flex-wrap sm:flex-nowrap sm:col-span-3 max-w-auto border-b-2 pb-2   ">
              <h1 className="font-bold text-black text-2xl">
                Event Dates <span className="text-red-500">*</span>
              </h1>
              {fields.map((field, index) => {
                const watchStartTime = watch(`events.${index}.startTime`);
                const watchEndTime = watch(`events.${index}.endTime`);
                return (
                  <div
                    key={field.id}
                    className="flex flex-row border-2  sm:border-2 p-2 gap-2  grid-rows-6  justify-start sm:justify-between flex-wrap flex-shrink sm:flex-nowrap"
                  >
                    <div>
                      <Controller
                        name={`events.${index}.startDate`}
                        control={control}
                        defaultValue={field.startDate}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            className={styles.dates}
                            {...field}
                            type="date"
                            onChange={(e) => {
                              field.onChange(e);
                              const updatedEndDate = e.target.value;
                              setValue(
                                `events.${index}.endDate`,
                                updatedEndDate
                              );
                            }}
                          />
                        )}
                      />
                      <label className="text-black">Date</label>
                    </div>
                    <div>
                      <Controller
                        name={`events.${index}.startTime`}
                        control={control}
                        defaultValue={field.startTime}
                        rules={{ required: true }}
                        onChange={(e) => {
                          field.onChange(e);
                          const updatedStartTime = e.target.value;
                          if (updatedStartTime > watchEndTime) {
                            setValue(
                              `events.${index}.endTime`,
                              updatedStartTime
                            );
                          }
                        }}
                        render={({ field }) => (
                          //@ts-expect-error
                          <input
                            {...field}
                            required
                            type="time"
                            className={styles.dates}
                          />
                        )}
                      />
                      <label className="text-black">Start Time</label>
                    </div>
                    <div hidden>
                      <Controller
                        name={`events.${index}.endDate`}
                        control={control}
                        defaultValue={field.endDate}
                        render={({ field }) => (
                          //@ts-expect-error
                          <input
                            {...field}
                            type="date"
                            disabled
                            hidden
                            className={styles.dates}
                          />
                        )}
                      />
                    </div>
                    <div>
                      <Controller
                        name={`events.${index}.endTime`}
                        control={control}
                        defaultValue={field.endTime}
                        rules={{
                          required: true,
                          validate: (value) =>
                            value >= watchStartTime || {
                              type: 'time',
                              message: 'End time must be after start time',
                            },
                        }}
                        render={({ field }) => (
                          //@ts-expect-error
                          <input
                            {...field}
                            required
                            type="time"
                            className={styles.dates}
                          />
                        )}
                      />
                      <label className="text-black">End Time</label>
                    </div>
                    <div>
                      <YellowButton onClick={() => remove(index)}>
                        Delete Date
                      </YellowButton>
                    </div>
                  </div>
                );
              })}
              <YellowButton
                onClick={() =>
                  append({
                    startDate: formatDate(new Date()),
                    startTime: moment().local().format('h:mm'),
                    endDate: formatDate(new Date()),
                    endTime: moment().local().format('h:mm'),
                  })
                }
              >
                Add Date
              </YellowButton>
              <ModalInput
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                onSave={handleAddDate}
                onClose={hideModal}
                selectedData={selectedData}
              />
              <YellowButton onClick={() => remove()}>Clear All</YellowButton>
            </div>

            <div className=" col-start-1 border-b-2 col-end-3 col-span-3 ">
              <input
                type="number"
                className={styles.input}
                name="people"
                id="people"
                required
              />
              <label
                className="text-black  text-lg font-bold "
                htmlFor="people"
              >
                Estimated number of attendees?{' '}
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="col-start-1  col-end-3">
              <div className="col-start-1">
                <Controller
                  name="building"
                  control={control}
                  render={({ field }) => (
                    <select
                      className="bg-slate-300 dark:bg-slate-600 rounded-md border-0 mx-2"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event);
                        handleBuildingSelect(event);
                      }}
                    >
                      <option value="">Select a building </option>
                      {buildings.map((building) => (
                        <option key={building} value={building}>
                          {building}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <Controller
                  name="facilityName"
                  control={control}
                  defaultValue={facilityName}
                  render={({ field }) => (
                    <select
                      className="bg-slate-300 dark:bg-slate-600 rounded-md border-0 mx-2"
                      {...field}
                      required
                      onChange={(event) => {
                        field.onChange(event);
                        handleFacilitySelect(event);
                      }}
                    >
                      <option value="">Select a facility</option>
                      {filteredFacilities.map((facility) => (
                        <option key={facility.id} value={facility.id}>
                          {facility.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <select
                  {...register('Category')}
                  required
                  className="  bg-slate-300 dark:bg-slate-600 max-w-[200px] flex rounded-md mt-2 overflow-hidden whitespace-nowrap text-ellipsis border-0 mx-2 truncate "
                >
                  <option value="">Pricing Category</option>
                  {facilityCategories.map((category, index) => (
                    <option
                      className="truncate text-ellipsis w-[100px]"
                      value={category.id}
                      key={index}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-start-1 p-2">
              <label className="inline-block text-black">
                Do you require tech support?
              </label>
              <input
                className="mx-2 my-2 scale-150 form-checkbox justify-end self-end align-bottom items-end bg-slate-400 border-4 shadow-md"
                type="checkbox"
                {...register('techSupport')}
                checked={techSupport}
                onChange={(e) => {
                  const value = e.target.checked;
                  setTechSupport(value);
                  return value;
                }}
              />
              {techSupport && (
                <div>
                  {' '}
                  <textarea
                    className={styles.textarea}
                    {...register('techDetails')}
                  />{' '}
                  <label className="italic text-black font-light">
                    Please describe what you need, projectors, microphones, etc.
                  </label>{' '}
                </div>
              )}
            </div>
            <div className="col-start-2 p-2">
              <label className="inline-block text-black">
                Do you require door access?
              </label>
              <input
                className="mx-2 my-2 scale-150 form-checkbox justify-end self-end align-bottom items-end bg-slate-400 border-4 shadow-md"
                type="checkbox"
                {...register('doorAccess')}
                checked={doorAccess}
                onChange={(e) => {
                  const value = e.target.checked;
                  setDoorAccess(value);
                  return value;
                }}
              />
              {doorAccess && (
                <>
                  <textarea
                    className={styles.textarea}
                    {...register('doorDetails')}
                  />
                  <label className="italic text-black font-light">
                    What doors need unlocked, and what times(if different than
                    event times)
                  </label>
                </>
              )}
            </div>
            <div>
              <div className="col-start-3 justify-end flex align-bottom items-end place-content-end">
                {isButtonDisabled && (
                  <p className="text-red-500">
                    Please complete all required fields.
                  </p>
                )}
                <PurpleButton
                  className="bg-primary  dark:bg-secondary justify-end self-end text-white rounded-md  hover:bg-purple-700 p-2 drop-shadow-md shadow-md transition-all duration-75 ease-in-out hover:scale-105 hover:-translate-x-1 hover:translate-y-1 "
                  type="submit"
                  disabled={isSubmitting || isButtonDisabled}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}

                  {errors && errors.events && (
                    <p> Please add at least one date. </p>
                  )}
                </PurpleButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
