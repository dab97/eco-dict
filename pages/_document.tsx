import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Экологический Диктант 2024"
          />
          <meta property="og:site_name" content="eco-dict.vercel.app" />
          <meta
            property="og:description"
            content="Экологический Диктант 2024"
          />
          <meta property="og:title" content="Экологический Диктант 2024" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
