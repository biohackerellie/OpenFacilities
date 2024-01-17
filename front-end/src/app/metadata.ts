import type { Metadata } from 'next';

export const meta: Metadata = {
  metadataBase: new URL('https://facilities.laurel.k12.mt.us'),
  title: 'LPS Facilities',
  description: 'Laurel Public Schools in Laurel, Montana Facility Rentals',
  keywords: ['Laurel Public Schools, Facility Rentals, Laurel, Montana'],
  authors: [{ name: 'Ellie Kerns', url: 'https://epklabs.com' }],
  creator: 'Ellie Kerns',
  publisher: 'EPKLabs',
  openGraph: {
    title: 'LPS Facilities',
    description: 'Laurel Public Schools Facility Rentals',
    siteName: 'LPS Facilities',
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
} as const;
