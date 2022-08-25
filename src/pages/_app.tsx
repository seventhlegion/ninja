import React, { StrictMode } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { Provider } from 'jotai'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StrictMode>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StrictMode>
  )
}

export default MyApp
