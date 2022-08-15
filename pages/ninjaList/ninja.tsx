import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import style from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
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
      <h1 className={style.title}>All Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <Link key={ninja.id} href={`/ninjaList/${ninja.id}`}>
          <div className={style.listContainer}>
            <h1 className={style.title}>
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