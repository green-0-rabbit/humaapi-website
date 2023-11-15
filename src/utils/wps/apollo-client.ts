import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { getSdkApollo } from './sdk-apollo';

const link = createHttpLink({
  uri: `${process.env.WORDPRESS_API_URL}`,
  fetch
});
const clientApollo = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
const apolloClient = getSdkApollo(clientApollo);
export default apolloClient;
