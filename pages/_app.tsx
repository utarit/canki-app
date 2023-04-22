import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="OCİT Canki App" />
        <meta
          property="og:description"
          content="OCİT Canki App, aklınıza takılan bir durumda veya sıkıldığınızda kullanabileceğiniz bir hobi projesidir. İlk yardım adımları, aklınıza kazınsın diye ritim metronomu, birkaç paylaşımla sizi canlı tutar."
        />
        <meta property="og:image" content="karavan.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
