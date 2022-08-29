import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment } from 'react';
import Container from '../../components/Container/Container';

export type ninjaProps = FC | String;

export const getStaticProps: GetStaticProps = async () => {
  const res: any = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: string = await res.json();

  return {
    props: {
      ninjas: data,
      fallback: false
    }
  }
}

function Ninja({ ninjas }: any) {

  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Ninja List | {router.asPath === '/ninjaList/ninja' ? 'List' : ''}</title>
      </Head>
      <Container>
        <h1 className='text-left text-4xl my-10'>All Ninjas</h1>
        {ninjas.map((ninja: any) => (
          <Link key={ninja.id} href={`/ninjaList/${ninja.id}`}>
            <div className='rounded-r-xl p-5 my-5 bg-slate-500 dark:bg-neutral-700 border-l-2 border-slate-500 dark:border-neutral-700 hover:border-l-2 hover:border-slate-300 hover:dark:border-neutral-500 transition-all ease-in-out hover:cursor-pointer hover:translate-x-3 shadow-lg'>
              <h1 className='text-3xl italic font-bold'>
                {ninja.name}
              </h1>
            </div>
          </Link>
        )
        )}
      </Container>
    </Fragment>
  )
}

export default Ninja