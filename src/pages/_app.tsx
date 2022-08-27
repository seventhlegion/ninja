import React, { StrictMode, ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout/Layout';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { NextPage } from 'next';

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

    const getLayout = Component.getLayout ?? ((page) => page)


    return getLayout(
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
