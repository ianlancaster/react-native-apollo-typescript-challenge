import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import ReservationCard from 'components/ReservationCard'
import { filterIncompleteReservations } from './Reservations.selectors'
import styles from './Reservations.styles'
import { Reservation } from 'types/models'
import { ReservationsProps } from './Reservations.types'

const Reservations: React.FC<ReservationsProps> = ({
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
      <TouchableOpacity
        onPress={() => navigation.navigate('AddReservation')}
        style={styles.addReservationButton}
      >
        <Text style={styles.buttonText}>Add New Reservation</Text>
      </TouchableOpacity>
    </>
  )
}

export default Reservations
