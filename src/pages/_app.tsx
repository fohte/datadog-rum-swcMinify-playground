import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DatadogInit } from '../datadog-rum'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DatadogInit />
      <Component {...pageProps} />
    </>
  )
}
