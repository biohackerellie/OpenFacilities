'use client';

import { facility } from '@/lib/types';

import React, { createContext, useContext, useState } from 'react';

interface facilityContextProps {
  facility: facility | null | undefined | undefined;
  setfacility: React.Dispatch<
    React.SetStateAction<facility | null | undefined>
  >;
}

const facilityContext = createContext<facilityContextProps | undefined>(
  undefined
);

export const useFacility = () => {
  const context = useContext(facilityContext);
  if (!context) {
    throw new Error('useFacility must be used within a facilityProvider');
  }
  return context;
};

interface facilityProviderProps {
  children: React.ReactNode;
}

export const facilityProvider: React.FC<facilityProviderProps> = ({
  children,
}) => {
  const [facility, setfacility] = useState<facility | null | undefined>(null);
  return (
    <facilityContext.Provider value={{ facility, setfacility }}>
      {children}
    </facilityContext.Provider>
  );
};
