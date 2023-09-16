import React from 'react';

export default function reservationAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen mb-3 pb-3">
      <div>{children}</div>
    </section>
  );
}
