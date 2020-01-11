import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Text, View } from 'react-native'
import React from 'react'

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

export default Bookings
