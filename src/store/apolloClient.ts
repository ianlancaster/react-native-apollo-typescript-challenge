import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import defaultClientState from './defaultClientState'
import resolvers from './resolvers'

export const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  link: new HttpLink({ uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev' }),
  resolvers,
})

cache.writeData({ data: defaultClientState })

export default apolloClient
