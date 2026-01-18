import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" suppressHydrationWarning>
      <Head>
        {/* Softgen AI monitoring script */}
        <script 
          src="https://cdn.softgen.ai/script.js" 
          async 
          data-softgen-monitoring="true"
        />
      </Head>
      <body className="antialiased" suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}