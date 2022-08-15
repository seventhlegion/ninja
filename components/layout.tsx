import React, { Fragment } from 'react'
import Footer from './footer'
import NavBar from './navBar'
import Head from 'next/head'

const Layout = ({ children }: any) => {
    return (
        <Fragment>
            <Head>
                <link rel='icon' href='/shuriken.png' />
                <meta name="keywords" content="ninja list" />
            </Head>
            <div className="content">
                <NavBar />
                {children}
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout