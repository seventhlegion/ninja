import { dehydrate, QueryClient, QueryClientProviderProps } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import getDetails from '../../api/getDetails';
import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import { useDetails } from '../../hooks/useDetails';

export const getServerSideProps: GetServerSideProps = async (context: Params) => {
  const { id } = context.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<QueryClientProviderProps>(['details', id], () => getDetails(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

function Details(): ReactNode {

  const { query: { id } } = useRouter();

  const { data, isLoading } = useDetails(id as string);

  if (isLoading) return <Loading />

  return (
    <Container>
      <div className='flex flex-col m-5 p-5 text-xl justify-center items-center' key={data.id}>
        <h1 className='text-4xl my-5 font-bold italic'>{data.name}</h1>
        <p className='my-2'>{data.username}</p>
        <p className='my-2'>{data.email}</p>
        <p className='my-2'>{data.phone}</p>
      </div>
    </Container>
  )
}

export default Details;
