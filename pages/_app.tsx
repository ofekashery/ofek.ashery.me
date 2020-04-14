import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import cookie from 'cookie';

type Theme = 'light' | 'dark';
type Props = AppProps & { defaultTheme: Theme };

const MyApp = ({ Component, pageProps, defaultTheme }: Props) => {
  const [theme, setActiveTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.cookie = `theme=${newTheme}`;
    setActiveTheme(newTheme);
  };

  return (
    <>
      <Head>
        <title>Ofek Ashery</title>
        <meta name="description" content="16 years old developer" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <meta property="og:title" content="Ofek Ashery" />
        <meta property="og:description" content="16 years old developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ofek.ashery.me" />
        <meta property="og:image" content="https://ofek.ashery.me/assets/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ofekashery" />
        <meta name="twitter:creator" content="@ofekashery" />
        <meta name="twitter:title" content="Ofek Ashery" />
        <meta name="twitter:description" content="16 years old developer" />
        <meta name="twitter:image" content="https://ofek.ashery.me/assets/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} isDark={theme === 'dark'} toggleTheme={toggleTheme} />
    </>
  );
};

MyApp.getInitialProps = (ctx) => ({
  defaultTheme: cookie.parse(ctx.ctx.req.headers.cookie || '').theme || 'light'
});

export default MyApp;