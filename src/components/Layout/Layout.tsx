import Head from 'next/head'
import { Fragment, PropsWithChildren } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Head>
        <link rel='icon' href='/shuriken.png' />
        <meta name="keywords" content="ninja list" />
      </Head >
      <main className='max-w-4xl mx-auto'>
        <NavBar />
        {children}
        <Footer />
      </main>
    </Fragment>
  )
}

export default Layout