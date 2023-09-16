'use client';

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { set, useForm } from 'react-hook-form';
import { BugEmailer } from '@/functions/emails';

interface IFormInput {
  name: string;
  email: string;
  text: string;
}

export default function BugModal({ children }: { children: React.ReactNode }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  const hideModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);
  const [isVisible, setIsVisible] = React.useState(false);

  const onSubmit = async (formData: IFormInput) => {
    setIsSubmitting(true);
    try {
      await BugEmailer(formData);
      alert('Your bug report has been submitted. Thank you!');
      hideModal();
    } catch (error) {
      alert('An error occurred while submitting your bug report. Lol');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="hover:text-blue-500 hover:cursor-pointer hover:underline text-red-500 font-bold"
        onClick={showModal}
      >
        {children}
      </button>
      <ReactModal
        className="relative inset-0 flex animate-overlayShow  flex-col items-center text-black dark:text-black inset-y-20 justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={!!isVisible}
      >
        <div className="bg-white align-center self-center  justify-center flex flex-col flex-wrap  rounded-lg max-w-sm   sm:min-w-34 sm:max-w-3xl p-4">
          <h1 className="text-2xl font-bold text-center">Report a Bug</h1>
          <p className="text-center">
            This site is brand new and developed in house by our{' '}
            <i>very talented</i> Systems Administrator Ellie. If you find any
            bugs, issues, or have any suggestions, please report them{' '}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">Text</label>
              <textarea id="text" {...register('text', { required: true })} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          <button onClick={hideModal}>Close</button>
        </div>
      </ReactModal>
    </>
  );
}
