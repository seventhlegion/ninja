import React from 'react'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  const paths = data.map((ninja: any) => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }: any) => {
  return (
    <div key={ninja.id} className='flex flex-col justify-center items-center max-w-xl mx-auto m-20 space-y-5'>
      <h1 className='text-4xl'>{ninja.name}</h1>
      <p className='text-xl'>{ninja.email}</p>
      <p className='text-xl'>{ninja.phone}</p>
      <p className='text-xl'>{ninja.website}</p>
    </div>
  )
}

export default Details