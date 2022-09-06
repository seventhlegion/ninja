import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ReactElement, ReactNode, StrictMode, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  )
}

export default MyApp
