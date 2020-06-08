import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ofek Ashery</title>
        <meta name="description" content="A 16-year-old passionate developer from Israel" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <meta property="og:title" content="Ofek Ashery" />
        <meta property="og:description" content="A 16-year-old passionate developer from Israel" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ofek.ashery.me" />
        <meta property="og:image" content="https://ofek.ashery.me/assets/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ofekashery" />
        <meta name="twitter:creator" content="@ofekashery" />
        <meta name="twitter:title" content="Ofek Ashery" />
        <meta name="twitter:description" content="A 16-year-old passionate developer from Israel" />
        <meta name="twitter:image" content="https://ofek.ashery.me/assets/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="preload"
          as="style"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
