import 'cross-fetch/polyfill'
import React from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import styles from './App.styles'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev',
})

const RESERVATIONS = gql`
  {
    reservations(orderBy: arrivalDate_ASC) {
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`

const Inner = () => {
  const { loading, error, data } = useQuery(RESERVATIONS)
  if (loading) return <Text>...loading</Text>
  if (error) console.log(error.message)
  console.log(data)
  return (
    <View>
      {data.reservations.map((reservation: any) => (
        <Text key={reservation.id}>{reservation.name}</Text>
      ))}
    </View>
  )
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
        >
          <Inner />
        </ScrollView>
      </SafeAreaView>
    </ApolloProvider>
  )
}

export default App
