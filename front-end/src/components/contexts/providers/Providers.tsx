import React from 'react';
import { UserProvider } from './UserContext';
import { FacilityProvider } from './FacilityContext';
import { ReservationProvider } from './ReservationContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <FacilityProvider>
        <ReservationProvider>{children}</ReservationProvider>
      </FacilityProvider>
    </UserProvider>
  );
};

export default Providers;
