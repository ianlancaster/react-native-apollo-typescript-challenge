import React from 'react'
import { FlatList, Text, View } from 'react-native'
import ReservationCard from 'components/ReservationCard'
import { useReservations } from './Reservations.queries'
import { filterIncompleteReservations } from './Reservations.selectors'

import { Reservation } from 'types/models'

const Reservations = () => {
  const { loading, error, data } = useReservations()

  if (loading || !data) return <Text>...loading</Text>

  if (error) console.log(error.message)

  const reservations = filterIncompleteReservations(data)

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
