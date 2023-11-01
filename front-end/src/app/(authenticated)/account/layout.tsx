import React from 'react';

export default function accountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="  mb-3 pb-3">
      <div>{children}</div>
    </section>
  );
}
