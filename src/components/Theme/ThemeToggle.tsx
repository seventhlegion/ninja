import React, { useContext, Fragment } from 'react'
import { ThemeContext } from './ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

function ThemeToggle(): any {

  const { theme, setTheme }: any = useContext(ThemeContext);

  const onClickHandler = () => {
    setTheme(() => theme === 'dark' ? 'light' : 'dark')
  }

  if (theme === 'light') {
    return (
      <Fragment>
        <MoonIcon
          className='w-10 text-gray-700 absolute'
        />
        <MoonIcon
          className='w-10 text-gray-700 hover:animate-ping opacity-75'
          onClick={onClickHandler}
        />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <SunIcon
          className='w-10 text-yellow-500 absolute'
        />
        <SunIcon
          className='w-10 text-yellow-500 hover:animate-ping opacity-75'
          onClick={onClickHandler}
        />
      </Fragment>
    )
  }
}

export default ThemeToggle