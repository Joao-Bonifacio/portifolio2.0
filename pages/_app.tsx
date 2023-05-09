import '@styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="/icons/livro.png"></link>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
