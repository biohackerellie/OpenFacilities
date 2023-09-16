'use client';

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useForm, SubmitHandler } from 'react-hook-form';
import { YellowButton } from '../ui/buttons';

interface IFormInput {
  department: string;
  reservationID: number;
  user: string;
  summary: string;
  description?: string;
}

export default function JiraModal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit } = useForm<IFormInput>();
  const hideModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);

  const onSubmit = async (data: IFormInput) => {
    setIsSubmitting(true);

    const formData = JSON.stringify(data);
    try {
      const res = await fetch('/api/jira', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: formData,
      });
      alert('Ticket Submitted');
      hideModal();
    } catch (error) {
      alert('An error occurred while submitting your ticket. Lol');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="justify-center self-center mt-8">
        <YellowButton onClick={showModal}>Submit a Work Order</YellowButton>
      </div>
      <ReactModal
        className="relative inset-0 flex animate-overlayShow  flex-col items-center text-black dark:text-black inset-y-20 justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={!!isVisible}
      >
        <div className="bg-white align-center self-center  justify-center flex flex-col flex-wrap  rounded-lg max-w-sm   sm:min-w-34 sm:max-w-3xl p-4">
          <h1 className="text-2xl font-bold text-center">
            Submit a Work Order
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="department">Department</label>
              <select {...register('department', { required: true })}>
                <option value="Select">Select</option>
                <option value="IT">IT</option>
                <option value="Facilities">Facilities</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                id="summary"
                {...register('summary', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                {...register('description')}
                placeholder="Provide additional details, if any."
              />
            </div>
            <div className="flex justify-between mt-2 ">
              <div>
                <YellowButton type="submit" disabled={isSubmitting}>
                  Submit
                </YellowButton>
              </div>
              <div>
                <YellowButton onClick={hideModal}>Cancel</YellowButton>
              </div>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
