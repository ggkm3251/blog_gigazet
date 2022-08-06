import React from 'react';


import '../styles/globals.scss';
import { Layout } from '../components';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script id="Adsense-id" 
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425895904266381"
crossorigin="anonymous"
/>
<div className="col-md-8">
    <h3 className="pb-4 mb-4 fst-italic border-bottom">
       Adsense ads
    </h3>
    <ins class="adsbygoogle"
     style={{display:block}}
     data-ad-format="fluid"
     data-ad-layout-key="+73+q7+1w-uv+tl"
     data-ad-client="ca-pub-8425895904266381"
     data-ad-slot="6232669921"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});    
     </script>
</div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
