import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { dayOptions } from '@/lib/formOptions';
import ReactModal from 'react-modal';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import './styles.css';
import { Button } from '../ui/buttons';
export const ModalInput = (props: {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onSave: (data: any) => void;
}) => {
  const { isVisible, setIsVisible, onSave } = props;

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const forwardChange = (data: any) => {
    hideModal();
    onSave(data);
  };
  return (
    <>
      <Button type="button" onClick={showModal}>
        Add Reoccurring Dates
      </Button>
      {isVisible && (
        <ModalForm
          isVisible={isVisible}
          onSave={forwardChange}
          onClose={hideModal}
        />
      )}
    </>
  );
};

const animatedComponents = makeAnimated();

export const ModalForm = (props: {
  isVisible: boolean;
  onSave: (data: any) => void;
  onClose: () => void;
}) => {
  const { isVisible, onSave, onClose } = props;
  const { register, handleSubmit, control } = useForm();

  const forwardSave = (data: any) => {
    onSave(data);
  };

  return (
    <>
      <ReactModal
        className="fixed inset-0 flex text-lg items-center text-black dark:text-black justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={isVisible}
      >
        <div className="bg-white items-center place-content-center   justify-center flex flex-col rounded-lg w-auto min-w-34 p-4">
          <div>
            <form onSubmit={handleSubmit(forwardSave)}>
              <div className="border-b-2 gap-2 my-2 p-2 ">
                <label className="font-Bold">Start Date</label>

                <input
                  className="form-date bg-gray-300 hover:bg-gray-200 text-black"
                  type="date"
                  {...register('startDate')}
                />
              </div>
              <div className="border-b-2 gap-2 my-2 p-2">
                <label className="label">Event start time? </label>
                <input
                  type="time"
                  className="form-date bg-gray-300 hover:bg-gray-200 my-2 text-black"
                  {...register('startTime')}
                />
              </div>
              <div>
                <div className="border-b-2 gap-2 my-2 p-2">
                  <label className="label">Event end time? </label>
                  <input
                    type="time"
                    className="form-date bg-gray-300 hover:bg-gray-200 text-black"
                    {...register('endTime')}
                  />
                </div>
                <div className="border-b-2 gap-2 my-2 p-2">
                  <label className="label">Day of the Week</label>
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
                  <label className="label">Repeat Until</label>
                  <div className="control">
                    <input
                      type="date"
                      className="form-date bg-gray-300 hover:bg-gray-200 text-black"
                      {...register('repeatUntil')}
                    />
                  </div>
                </div>
                <div className="border-b-2   gap-4 my-2 p-2 mx-4 justify-between justify-items-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    type="button"
                    onClick={handleSubmit(forwardSave)}
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
