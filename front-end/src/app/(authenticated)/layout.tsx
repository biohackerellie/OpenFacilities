import React from 'react';
import { AuthCheck } from '@/components/contexts';
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
