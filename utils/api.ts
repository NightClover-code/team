import { ApolloClient, InMemoryCache } from '@apollo/client';

//apollo client init
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  cache: new InMemoryCache(),
});
