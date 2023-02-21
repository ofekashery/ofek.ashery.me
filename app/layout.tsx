import { Inter } from '@next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-white">{children}</body>
    </html>
  );
};

export default RootLayout;
