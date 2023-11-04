import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Friending" />
        <meta name="keywords" content="프렌딩, SNS, 교환" />
        <meta
          property="og:description"
          content="센스있는 프로필 트랜드 Friending!"
        />
        <meta property="og:url" content="https://friending.online/" />
        <meta
          property="og:image"
          content="https://friending.online/ogLogo.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
