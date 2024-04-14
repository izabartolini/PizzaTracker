import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>

  )


}
