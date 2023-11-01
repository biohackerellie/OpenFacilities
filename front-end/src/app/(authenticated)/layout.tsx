import React from 'react';

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
