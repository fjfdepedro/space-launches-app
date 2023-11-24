import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});

import { DocumentNode } from '@apollo/client';

export async function fetchData(query: DocumentNode) {
  const { data } = await client.query({
    query
  });

  return data;
}
