import React from 'react';

import AuthProvider from '@/components/contexts/providers/AuthProvider';
import { ThemeProviders } from '@/components/contexts/providers/ThemeProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar/Navbar';
import { GeistSans } from 'geist/font';
import { Analytics } from '@vercel/analytics/react';
export { meta as metadata } from './metadata';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

//layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={GeistSans.className}
    >
      <body>
        <AuthProvider>
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
          <SpeedInsights />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
