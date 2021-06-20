import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gamerbiz - consultoria em eSports</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Consultoria em eSports, integrando diferentes públicos."
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
