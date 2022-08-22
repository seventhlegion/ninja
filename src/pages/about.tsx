import React, { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

type aboutProps = React.ReactNode

function About(): aboutProps {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/about' ? 'About' : ''}</title>
      </Head>
      <div className='flex flex-col justify-center text-center my-10 rounded-lg shadow-lg'>
        <h1 className='p-5 text-4xl'>
          About
        </h1>
        <p className='p-5 text-xl text-justify'>
          Ms Nossel said that Mr Rushdie had emailed her just hours before the incident, offering help with placements for Ukrainian writers.
          "We hope and believe fervently that his essential voice cannot and will not be silenced," she added.
        </p>
      </div>
    </Fragment>
  )
}

export default About