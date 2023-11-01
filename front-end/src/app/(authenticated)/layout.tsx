import AuthCheck from '@/components/contexts/AuthCheck';
import React from 'react';

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AuthCheck>{children}</AuthCheck>
    </section>
  );
}
