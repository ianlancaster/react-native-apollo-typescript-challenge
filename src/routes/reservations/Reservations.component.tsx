import React from 'react'
import { FlatList } from 'react-native'
import ReservationCard from 'components/ReservationCard'
import { filterIncompleteReservations } from './Reservations.selectors'
import { Reservation } from 'types/models'
import { ReservationsProps } from './Reservations.types'

const Reservations = ({ data }: ReservationsProps) => {
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
