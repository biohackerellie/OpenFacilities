'use client';

import React, { useEffect, useState } from 'react';

const NoSsr = ({ children }: any): JSX.Element => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return <>{isMounted ? children : null}</>;
};

export default NoSsr;
