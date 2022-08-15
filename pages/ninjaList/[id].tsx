import React from 'react'
import style from '../../styles/Home.module.css'

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
    <div key={ninja.id} className={style.container}>
      <h1 className={style.title}>{ninja.name}</h1>
      <p className={style.p}>{ninja.email}</p>
      <p className={style.p}>{ninja.phone}</p>
      <p className={style.p}>{ninja.website}</p>
    </div>
  )
}

export default Details