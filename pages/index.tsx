import type { Metadata } from 'next'
import type { Launch } from '../types';
import { fetchData } from '../lib/apolloClient';
import { GET_LAUNCHES } from '../graphql/getLaunches';
import { Launches } from '../components/Launches';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export async function getStaticProps() {
  const data = await fetchData(GET_LAUNCHES);

  return {
    props: {
      launches: data.launchesPast
    }
  }
}

export default function Home({ launches }: { launches: Launch[] }) {
  console.log('launches', launches);
  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold">
        SpaceX Launches
      </h1>
      <div>
        <Launches launches={launches} />
      </div>
    </div>
  )
}
