import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Partytown } from "@builder.io/partytown/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
      </Head>
      <Script
        type="text/partytown"
        src="https://www.googletagmanager.com/gtag/js?id=G-DD869VZF1Y"
      />
      <Script
        id="gtm"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DD869VZF1Y');`,
        }}
      />
      <Script src="/scripts/general.js" />
      <Component {...pageProps} />
    </>
  );
}
