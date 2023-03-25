import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ofek Ashery',
  description: 'A 19-year-old passionate developer from Israel.',
  themeColor: '#101010',
  icons: {
    shortcut: '/assets/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://ofek.ashery.me',
    title: 'Ofek Ashery',
    description: 'A 19-year-old passionate developer from Israel.',
    images: [
      {
        url: 'https://ofek.ashery.me/assets/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
