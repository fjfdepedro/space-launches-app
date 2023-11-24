import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/getLaunches';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_LAUNCHES
  });

  return {
    props: {
      launches: data.launchesPast
    }
  }
}
