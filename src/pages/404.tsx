import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'

type notFoundProps = React.ReactNode

function NotFound(): notFoundProps {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => { router.push('/') }, 3000)
  }, [])
  return (
    <Fragment>
      <div className='flex flex-col justify-center items-center text-center max-w-xl mx-auto'>
        <h1 className='text-5xl text-rose-800 py-10'>
          Oooops...
        </h1>
        <p className='text-xl py-2'>
          The page is not found
        </p>
        <p className='text-xl py-2'>
          Click here to back to <Link href={'/'}><span className='text-blue-600 underline'>Home Page</span></Link></p>
      </div>
    </Fragment>
  )
}

export default NotFound