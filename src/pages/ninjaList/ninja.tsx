import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const res: any = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: string = await res.json();

  return {
    props: {
      ninjas: data,
      fallback: false
    }
  }
}

const Ninja = ({ ninjas }: any) => {
  const router = useRouter();

  const [hover, setHover] = useState(true);
  const hoverHandler = () => {
    setHover(!hover)
  }
  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/ninjaList/ninja' ? 'List' : ''}</title>
      </Head>
      <h1 className='text-center text-4xl my-10'>All Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <Link key={ninja.id} href={`/ninjaList/${ninja.id}`}>
          <div className='max-w-xl mx-auto bg-rose-900 rounded-r-xl p-5 my-5 border-l-2 border-rose-900 hover:border-l-2 hover:border-slate-400 transition-all ease-in-out hover:translate-x-5'>
            <h1 className='text-2xl italic'>
              {ninja.name}
            </h1>
          </div>
        </Link>
      )
      )}
    </Fragment>
  )
}

export default Ninja