import React, { StrictMode } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Head from 'next/head'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <StrictMode>
      <Head>
        <link rel='icon' href='/shuriken.png' />
        <meta name="keywords" content="ninja list" />
      </Head>
      <main className='max-w-4xl mx-auto'>
        <NavBar />
        {children}
        <Footer />
      </main>
    </StrictMode>
  )
}

export default Layout