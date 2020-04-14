import React from 'react';
import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://ashery.me/css/style.css" />
      </Head>
      <div className="card">
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
      </div>
    </>
  );
};

export default Error404;
