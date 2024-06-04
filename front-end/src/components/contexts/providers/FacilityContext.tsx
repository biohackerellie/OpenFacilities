'use client';

import type { Facility } from '@/lib/types';

import React, { createContext, useContext, useState } from 'react';

interface FacilityContextProps {
  facility: Facility | null | undefined  ;
  setFacility: React.Dispatch<
    React.SetStateAction<Facility | null | undefined>
  >;
}

const FacilityContext = createContext<FacilityContextProps | undefined>(
  undefined
);

export const useFacility = () => {
  const context = useContext(FacilityContext);
  if (!context) {
    throw new Error('useFacility must be used within a FacilityProvider');
  }
  return context;
};

interface FacilityProviderProps {
  children: React.ReactNode;
}

export const FacilityProvider: React.FC<FacilityProviderProps> = ({
  children,
}) => {
  const [facility, setFacility] = useState<Facility | null | undefined>(null);
  return (
    <FacilityContext.Provider value={{ facility, setFacility }}>
      {children}
    </FacilityContext.Provider>
  );
};
