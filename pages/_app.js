import React from 'react';
import Script from 'next/script'

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script 
      id="Adsense-id"
      data-ad-client="ca-pub-8425895904266381"
      async
      strategy="afterInteractive"
      crossorigin="anonymous"
      onError={ (e) => { console.error('Script failed to load', e) }}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425895904266381"
     />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
