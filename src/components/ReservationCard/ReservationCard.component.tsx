import { Reservation } from 'models'
import { Text, View } from 'react-native'
import React from 'react'

const ReservationCard = (reservation: Reservation) => (
  <View key={reservation.id}>
    <Text>Name: {reservation.name}</Text>
    <Text>Hotel Name: {reservation.hotelName}</Text>
    <Text>Arrival Date: {reservation.arrivalDate}</Text>
    <Text>Departure Date: {reservation.departureDate}</Text>
  </View>
)

export default ReservationCard
