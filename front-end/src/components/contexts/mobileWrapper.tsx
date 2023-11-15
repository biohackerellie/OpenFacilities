'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MobileWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <div className="justify-center align-middle text-center flex flex-wrap flex-col">
        <h1 className="font-bold text-2xl">
          This page is not available on mobile.
        </h1>
        <h2 className="font-bold  text-xl">
          {' '}
          Click{' '}
          <Link className="text-blue-600" href="/">
            Here
          </Link>{' '}
          to go back
        </h2>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}
