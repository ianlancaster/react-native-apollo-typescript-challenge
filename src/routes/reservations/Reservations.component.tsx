import React from 'react'
import { FlatList } from 'react-native'
import { Reservation } from 'types/models'
import ReservationCard from 'components/ReservationCard'
import PrimaryButton from 'components/PrimaryButton'
import { filterIncompleteReservations } from './Reservations.selectors'
import styles from './Reservations.styles'
import { ReservationsProps } from './Reservations.types'

const Reservations: React.FC<ReservationsProps> = React.memo(({
  data,
  navigation,
}) => {
  const reservations = filterIncompleteReservations(data)

  return (
    <>
      <FlatList
        data={reservations}
        style={styles.scrollContainer}
        renderItem={({ item }: { item: Reservation }) => (
          <ReservationCard {...item} />
        )}
      />
      <PrimaryButton
        onPress={() => navigation.navigate('AddReservation')}
        buttonText='Add New Reservation'
      />
    </>
  )
})

export default Reservations
