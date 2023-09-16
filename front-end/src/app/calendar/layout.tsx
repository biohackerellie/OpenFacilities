import React from 'react';

export default function calendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
