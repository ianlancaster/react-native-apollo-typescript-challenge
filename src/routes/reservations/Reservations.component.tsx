import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { FlatList, Text, View } from 'react-native'
import ReservationCard from 'components/ReservationCard'

import { ReservationOrderByInput } from 'types/GlobalGraphTypes'
import { Reservation } from 'models'
import { GetReservationsData, GetReservationsDataVariables } from './graphTypes/GetReservationsData'

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
  const { loading, error, data } = useQuery<GetReservationsData, GetReservationsDataVariables>(
    GET_RESERVATIONS,
    { variables: { orderBy: ReservationOrderByInput.arrivalDate_ASC } },
  )

  if (loading || !data) return <Text>...loading</Text>

  if (error) console.log(error.message)

  const reservations = data.reservations.filter(reservation => (
    reservation
    && reservation.id
    && reservation.name
    && reservation.hotelName
    && reservation.arrivalDate
    && reservation.departureDate
  )) as Reservation[]

  return (
    <FlatList
      data={reservations}
      renderItem={({ item }: { item: Reservation }) => (
        <ReservationCard {...item} />
      )}
    />
  )
}

export default Reservations
