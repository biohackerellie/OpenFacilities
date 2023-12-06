import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from '@/components/contexts/providers/AuthProvider';
import { ThemeProviders } from '@/components/contexts/providers/ThemeProvider';

import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar/Navbar';
import { GeistSans } from 'geist/font';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

export const metadata = {
  title: 'Open Facilities',
  description: 'Open Source Facility Rental Software',
};

//layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html
        lang="en"
        suppressHydrationWarning={true}
        className={GeistSans.className}
      >
        <body>
          <ThemeProviders
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}
            <Footer />
            <Toaster />
          </ThemeProviders>
          <Analytics />
        </body>
      </html>
    </AuthProvider>
  );
}
