import { Roboto_Mono } from 'next/font/google';
import AuthProvider from '@/components/contexts/providers/AuthProvider';
import { ThemeProviders } from '@/components/contexts/providers/ThemeProvider';
import { Providers } from '@/components/contexts';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar/Navbar';
import moment from 'moment-timezone';
import './globals.css';

moment.tz.setDefault('America/Denver');

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

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
      <html lang="en" suppressHydrationWarning>
        <body className={`${roboto_mono.variable}`}>
          <ThemeProviders>
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </ThemeProviders>
        </body>
      </html>
    </AuthProvider>
  );
}
