import 'cross-fetch/polyfill'
import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { defaultClientState } from 'store'
import Routes from 'routes'

export const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev' }),
  resolvers: {},
})

cache.writeData({ data: defaultClientState })

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

export default App
