import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import ThemeToggle from '../Theme/ThemeToggle';

type navBarProps = | JSX.Element

function NavBar(): navBarProps {
  const router = useRouter();
  return (
    <Fragment>
      <nav className='h-56 max-w-5xl mx-auto p-5 m-2 flex flex-row justify-center items-end'>
        <div className='flex flex-col w-auto justify-start'>
          <Image src={'/ninja.png'} width={50} height={50} layout={'responsive'} />
          <h1 className='text-3xl p-0 m-0'>
            NINJA LIST
          </h1>
        </div>
        <ul className={'flex flex-row grow items-center justify-end space-x-4 text-2xl'}>
          <li><input className='hover:cursor-pointer' type={'button'} value={'Home'} onClick={() => router.push('/')} /></li>
          <li><input className='hover:cursor-pointer' type={'button'} value={'About'} onClick={() => router.push('/about')} /></li>
          <li><input className='hover:cursor-pointer' type={'button'} value={'List'} onClick={() => router.push('/ninjaList/ninja')} /></li>
        </ul>
        <div className='self-start py-2'>
          {ThemeToggle()}
        </div>
      </nav>
    </Fragment >
  )
}

export default NavBar