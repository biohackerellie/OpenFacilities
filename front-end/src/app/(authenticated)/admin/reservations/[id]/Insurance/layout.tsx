import React from 'react';

export default function insuranceAdminLayout({
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
