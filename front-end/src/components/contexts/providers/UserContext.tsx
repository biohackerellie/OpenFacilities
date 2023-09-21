'use client';

import { user } from '@/lib/types';

import React, { createContext, useContext, useState } from 'react';

interface userContextProps {
  user: user | null | undefined;
  setuser: React.Dispatch<React.SetStateAction<user | null | undefined>>;
}

const userContext = createContext<userContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error('useUser must be used within a userProvider');
  }
  return context;
};

interface userProviderProps {
  children: React.ReactNode;
}

export const userProvider: React.FC<userProviderProps> = ({ children }) => {
  const [user, setuser] = useState<user | null | undefined>(null);
  return (
    <userContext.Provider value={{ user, setuser }}>
      {children}
    </userContext.Provider>
  );
};
