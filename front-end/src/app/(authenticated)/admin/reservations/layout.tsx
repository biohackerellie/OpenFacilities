import React from 'react';

export default function reservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex align-middle justify-center transition-all ease-in-out">
        {children}
      </div>
    </section>
  );
}
