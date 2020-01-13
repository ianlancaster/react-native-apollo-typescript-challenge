import React from 'react'
import { FlatList, Alert } from 'react-native'
import ReservationCard from 'components/ReservationCard'
import DefaultLoader from 'components/DefaultLoader'
import { useReservations } from './Reservations.queries'
import { filterIncompleteReservations } from './Reservations.selectors'
import { Reservation } from 'types/models'

const Reservations = () => {
  const { loading, error, data } = useReservations()

  if (loading) return <DefaultLoader />

  if (error) Alert.alert('Error', error.message)

  if (data) {
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

  return null
}

export default Reservations
