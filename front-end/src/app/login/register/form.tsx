'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TosModal } from '@/components/forms';
import { CreateUser } from '@/functions';
import { redirect } from 'next/navigation';
import Swal from 'sweetalert2';

interface IFormInput {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  terms: boolean;
}

export default function CreateAccount() {
  const {
    register,
    watch,
    getValues,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  React.useEffect(() => {
    setError('confirmPassword', {
      type: 'manual',
      message: 'Passwords do not match',
    });
  }, [getValues('password'), getValues('confirmPassword')]);

  const onSubmit = async (formData: IFormInput) => {
    try {
      await CreateUser(formData);
      Swal.fire({
        title: 'Account Created',
        text: 'Your account has been created. Please login.',
        icon: 'success',
        confirmButtonText: 'Ok',
      }).then(() => {
        window.location.href = '/login';
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please contact the administrator.',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Try Again',
      }).then((result) => {
        if (result.isConfirmed) {
          redirect('/');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          location.reload();
        }
      });
    }
  };
  return (
    <div className="flex flex-wrap align-center justify-center p-2 m-5 gap-5">
      <h2 className="font-bold basis-full text-center text-4xl">
        {' '}
        Create an account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="basis-full gap-y-10 m-y-5">
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="text-black"
              {...register('name')}
              type="text"
              required
              placeholder="First and Last name"
            />
          </div>
          <label htmlFor="email">Email Address</label>
          <input
            className="text-black"
            {...register('email')}
            required
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: true,
              minLength: 5,
            })}
            id="password"
            type="password"
            placeholder="********"
            className="text-black"
          />
          {errors?.password?.type === 'required' && (
            <p className="font-bold text-red-600 ">This field is required</p>
          )}
          {errors?.password?.type === 'minLength' && (
            <p className="font-bold text-red-600 ">
              password cannot less than 5 characters
            </p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="text-black"
            type="password"
            {...register('confirmPassword')}
            placeholder="********"
          />
          {watch('confirmPassword') !== watch('password') &&
          getValues('confirmPassword') ? (
            <p className="font-bold text-red-600 ">passwords do not match</p>
          ) : null}
        </div>
        <div></div>
        <div>
          <input type="checkbox" {...register('terms')} required />
          <label htmlFor="terms" className="inline m-2">
            I agree to the{' '}
            <strong className="">
              {' '}
              <TosModal />
            </strong>
          </label>
        </div>
        <div></div>
        <button
          className="bg-primary dark:bg-secondary text-sm sm:text-md p-1 text-white rounded-md hover:bg-purple-700 text-center sm:p-2 mt-5 drop-shadow-md shadow-md transition-all duration-75 ease-in-out hover:scale-105 sm:hover:translate-x-1 sm:hover:translate-y-1 "
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
