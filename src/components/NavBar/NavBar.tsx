import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import getNames from '../../api/getNames';
import HealthCheck from '../HealthCheck/HealthCheck';
import ThemeToggle from '../Theme/ThemeToggle';

function NavBar(): JSX.Element {
  const router = useRouter();

  const liStyle = 'hover:cursor-pointer hover:-translate-y-2 transition-transform delay-150';

  const { isSuccess } = useQuery(['names'], getNames);

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
          <li><input className={liStyle} type={'button'} value={'Home'} onClick={() => router.push('/')} /></li>
          <li><input className={liStyle} type={'button'} value={'About'} onClick={() => router.push('/about')} /></li>
          <li><input className={liStyle} type={'button'} value={'List'} onClick={() => router.push('/ninjaList/ninja')} /></li>
          <li>
            <HealthCheck check={isSuccess ? true : false} />
          </li>
        </ul>
        <div className='self-start py-2'>
          {ThemeToggle()}
        </div>
      </nav>
    </Fragment >
  )
}

export default NavBar