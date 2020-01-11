import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

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

const Bookings = () => {
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

const Routes = createStackNavigator({
  Bookings: {
    screen: Bookings,
  },
})

export default createAppContainer(Routes)
