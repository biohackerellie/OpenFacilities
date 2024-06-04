'use client';

import type { Reservation } from '@/lib/types';

import React, { createContext, useContext, useState } from 'react';

interface ReservationContextProps {
  reservation: Reservation | null | undefined;
  setReservation: React.Dispatch<
    React.SetStateAction<Reservation | null | undefined>
  >;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(
  undefined
);

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};

interface ReservationProviderProps {
  children: React.ReactNode;
}

export function ReservationProvider({ children }: ReservationProviderProps) {
  const [reservation, setReservation] = useState<
    Reservation | null | undefined
  >(null);
  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}
