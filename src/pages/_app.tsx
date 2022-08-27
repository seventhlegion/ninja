import React, { StrictMode } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout/Layout';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
