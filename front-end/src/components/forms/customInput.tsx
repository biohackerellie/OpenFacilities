'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function CustomInput({ name, rules, ...rest }: any) {
  const { register } = useFormContext();
  return (
    <input
      {...register(name, rules)}
      {...rest}
      className="form-input bg-gray-300 dark:bg-slate-600 dark:text-white border-3 text-black drop-shadow-sm border-primary rounded-md"
    />
  );
}
