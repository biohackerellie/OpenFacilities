import React from 'react';
import ReactDOM from 'react-dom';
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

// export const metadata = {
//   title: 'LPS Facilities',
//   description: 'Laurel Public Schools Facility Rentals',
//   keywords: ['Laurel Public Schools, Facility Rentals, Laurel, Montana'],
//   authors: [{ name: 'Ellie Kerns', url: 'https://epklabs.com' }],
//   creator: 'Ellie Kerns',
//   publisher: 'EPKLabs',
//   openGraph: {
//     title: 'LPS Facilities',
//     description: 'Laurel Public Schools Facility Rentals',
//     url: 'https://facilities.laurel.k12.mt.us',
//     siteName: 'LPS Facilities',
//     images: [
//       {
//         url: 'https://facilities.laurel.k12.mt.us/og.png',
//         width: 800,
//         height: 600,
//       },
//     ],
//     local: 'en_US',
//     type: 'website',
//   },
// };

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
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </AuthProvider>
  );
}
