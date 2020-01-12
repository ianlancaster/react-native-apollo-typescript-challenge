import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Text, View } from 'react-native'
import React from 'react'

const GET_RESERVATIONS = gql`
  query GetReservationsData($orderBy: ReservationOrderByInput) {
    reservations(orderBy: $orderBy) {
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`

const Reservations = () => {
  const { loading, error, data } = useQuery(
    GET_RESERVATIONS,
    { variables: { orderBy: 'arrivalDate_ASC' } },
  )

  if (loading) return <Text>...loading</Text>

  if (error) console.log(error.message)

  return (
    <View>
      {data.reservations.map((reservation: any) => (
        <Text key={reservation.id}>{reservation.name}</Text>
      ))}
    </View>
  )
}

export default Reservations
