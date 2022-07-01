import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import Layout from '../components/Layout';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
