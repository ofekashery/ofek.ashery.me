import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
      </Head>
      <Component {...pageProps} />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-43849303-8" />
      <Script
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-43849303-8');`
        }}
      />
    </>
  );
};

export default MyApp;
