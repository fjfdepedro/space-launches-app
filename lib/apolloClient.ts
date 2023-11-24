import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});

export async function fetchData(query) {
  const { data } = await client.query({
    query
  });

  return data;
}
