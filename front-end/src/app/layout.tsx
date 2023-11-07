import { Roboto_Mono } from 'next/font/google';
import AuthProvider from '@/components/contexts/providers/AuthProvider';
import { ThemeProviders } from '@/components/contexts/providers/ThemeProvider';
import { Providers } from '@/components/contexts';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar/Navbar';
import { GeistSans } from 'geist/font';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// });

export const metadata = {
  title: 'LPS Facilities',
  description: 'Laurel Public Schools Facility Rentals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className={GeistSans.className}>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string}
        />
        <body>
          <ThemeProviders>
            <Providers>
              <Navbar />

              {children}

              <Footer />
              <Toaster />
            </Providers>
          </ThemeProviders>
          <Analytics />
        </body>
      </html>
    </AuthProvider>
  );
}
