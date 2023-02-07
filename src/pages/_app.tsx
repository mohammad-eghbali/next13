import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DD869VZF1Y"
      />
      <Script
        id="show-banner"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DD869VZF1Y');`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
