import React, { Fragment, useState, FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '../../components/Container/Container'
import { GetStaticProps } from 'next'

export type ninjaProps = FC | String

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

function Ninja({ ninjas }: any) {

  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/ninjaList/ninja' ? 'List' : ''}</title>
      </Head>
      <Container>
        <h1 className='text-left text-4xl my-10'>All Ninjas</h1>
        {ninjas.map((ninja: any) => (
          <Link key={ninja.id} href={`/ninjaList/${ninja.id}`}>
            <div className='text-slate-900 bg-rose-900 rounded-r-xl p-5 my-5 border-l-2 border-rose-900 hover:border-l-2 hover:border-slate-50 transition-all ease-in-out hover:cursor-pointer hover:translate-x-5 shadow-lg'>
              <h1 className='text-3xl italic font-bold text-slate-100 dark:text-slate-900'>
                {ninja.name}
              </h1>
            </div>
          </Link>
        )
        )}
      </Container>
    </Fragment>
  )
}

export default Ninja