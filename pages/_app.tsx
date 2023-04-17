//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
//import Header from "../components/header"
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
  </>
  )
}
