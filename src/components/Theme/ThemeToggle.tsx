import React, { Fragment, useEffect, ReactNode } from 'react'
import { atom, useAtom } from 'jotai'
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useLoaded } from '../../hooks/useLoaded';

type Theme = 'light' | 'dark';

const browser = typeof window !== 'undefined';

const localValue = (browser ? localStorage.getItem('theme') : 'light') as Theme;

const systemTheme: Theme = browser && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const themeAtom = atom<Theme>(localValue || systemTheme)

function ThemeToggle(): ReactNode | JSX.Element {

  const loaded: boolean = useLoaded();

  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (!browser) return;

    localStorage.setItem('theme', theme);

    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme])

  return (
    <Fragment key={'themeToggle'}>
      {theme === 'light'
        ? (loaded && (<>
          <MoonIcon
            className='w-8 absolute text-gray-500 hover:cursor-pointer hover:animate-ping'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

          <MoonIcon
            className='w-8 text-gray-500 hover:cursor-pointer' />
        </>)
        )
        : (loaded && (<>
          <SunIcon
            className='w-8 absolute text-yellow-500 hover:cursor-pointer hover:animate-ping'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

          <SunIcon
            className='w-8 text-yellow-500 hover:cursor-pointer' />
        </>)
        )}
    </Fragment>
  )
}

export default ThemeToggle