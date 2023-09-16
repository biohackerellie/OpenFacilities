import AuthCheck from '@/components/contexts/AuthCheck';
import React from 'react';

const appid = process.env.SQUARE_APP_ID as string;
const token = process.env.SQUARE_TOKEN as string;

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
