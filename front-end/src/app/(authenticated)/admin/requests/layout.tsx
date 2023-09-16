import React from 'react';

export default function requestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex align-middle p-2 mb-5 overflow-auto justify-center transition-all ease-in-out">
        {children}
      </div>
    </section>
  );
}
