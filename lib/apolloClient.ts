import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DocumentNode } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});

export async function fetchData(query: DocumentNode) {
  const { data } = await client.query({
    query
  });

  return data;
}
