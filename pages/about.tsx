import React, { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import style from '../styles/Home.module.css'

const About = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/about' ? 'About' : ''}</title>
      </Head>
      <div className={style.container}>
        <h1 className={style.title}>
          About
        </h1>
        <p className={style.p}>
          Ms Nossel said that Mr Rushdie had emailed her just hours before the incident, offering help with placements for Ukrainian writers.
          "We hope and believe fervently that his essential voice cannot and will not be silenced," she added.
        </p>
      </div>
    </Fragment >
  )
}

export default About