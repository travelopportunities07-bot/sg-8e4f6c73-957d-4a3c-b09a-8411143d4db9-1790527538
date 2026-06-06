import { Html, Head, Main, NextScript } from "next/document";

import { SEOElements } from "@/components/SEO";
export default function Document() {
  return (
    <Html lang="fr" suppressHydrationWarning>
      <Head>
        <SEOElements />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
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