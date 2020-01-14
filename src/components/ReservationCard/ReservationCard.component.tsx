import React from 'react'
import { Text, View } from 'react-native'
import { Reservation } from 'types/models'
import styles from './ReservationCard.styles'

const ReservationCard: React.FC<Reservation> = reservation => (
  <View key={reservation.id} style={styles.container}>
    <Text>Name: {reservation.name}</Text>
    <Text>Hotel Name: {reservation.hotelName}</Text>
    <Text>Arrival Date: {reservation.arrivalDate}</Text>
    <Text>Departure Date: {reservation.departureDate}</Text>
  </View>
)

export default ReservationCard
