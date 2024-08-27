import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#101010',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ofek.ashery.me'),
  title: 'Ofek Ashery',
  description: 'Building fast and beautiful products.',
  icons: {
    shortcut: '/assets/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://ofek.ashery.me',
    title: 'Ofek Ashery',
    description: 'Building fast and beautiful products.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-sm text-white antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
