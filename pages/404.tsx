import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => { router.push('/') }, 3000)
  }, [])
  return (
    <Fragment>
      <div className={style.container}>
        <h1 className={style.title}>
          Oooops...
        </h1>
        <p className={style.p}>
          The page is not found
        </p>
        <p className={style.p}>
          Click here to back to <Link href={'/'}>Home Page</Link></p>
      </div>
    </Fragment>
  )
}

export default NotFound