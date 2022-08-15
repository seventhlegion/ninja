import React, { Fragment } from 'react'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();
  return (
    <Fragment>
      <nav className={style.nav}>
        <div className={style.navContainer}>
          <Image src={'/ninja.png'} width={190} height={190} layout={'responsive'} />
          <h1 className={style.navTitle}>
            NINJA LIST
          </h1>
        </div>
        <ul className={style.ul}>
          <li className={style.li}><input className={style.btn} type={'button'} value={'Home'} onClick={() => router.push('/')} /></li>
          <li className={style.li}><input className={style.btn} type={'button'} value={'About'} onClick={() => router.push('/about')} /></li>
          <li className={style.li}><input className={style.btn} type={'button'} value={'List'} onClick={() => router.push('/ninjaList/ninja')} /></li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default NavBar