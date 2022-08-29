import { Fragment } from 'react'

function Footer(): JSX.Element {
  return (
    <Fragment>
      <footer className='flex flex-col justify-center items-center p-5 m-5'>
        <p>
          Copyright 2022 Ninja List
        </p>
      </footer>
    </Fragment>
  )
}

export default Footer