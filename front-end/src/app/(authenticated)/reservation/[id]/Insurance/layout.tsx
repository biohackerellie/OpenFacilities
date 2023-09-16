import React from 'react';

export default function insuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen">
      <div>{children}</div>
    </section>
  );
}
