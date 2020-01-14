import 'cross-fetch/polyfill'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from 'store/apolloClient'
import Routes from 'routes'

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>
)

export default App
