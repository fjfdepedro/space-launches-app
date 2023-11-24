import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});


export const GET_LAUNCHES_QUERY = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

type ApolloClientProviderProps = React.PropsWithChildren<{}>;

 export const ApolloClientProvider: React.FC<ApolloClientProviderProps> = ({ children }) => {
   return <ApolloProvider client={client}>{children}</ApolloProvider>;
 };

 export default ApolloClientProvider;