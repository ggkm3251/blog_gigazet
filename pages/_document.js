import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425895904266381"
     crossorigin="anonymous"></script>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425895904266381"
     crossorigin="anonymous"></script>
<!-- Adsense1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8425895904266381"
     data-ad-slot="7348642176"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;