import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://testbykhan.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export default client;