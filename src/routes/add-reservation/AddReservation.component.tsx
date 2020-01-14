import React from 'react'
import { Text, TextInput } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { GET_NEW_RESERVATION } from './AddReservation.queries'
import { GetNewReservationState } from './graphTypes/GetNewReservationState'

const AddReservation: NavigationStackScreenComponent = () => {
  const { data, client } = useQuery<GetNewReservationState>(GET_NEW_RESERVATION)
  if (!data) return <Text>Not Found.</Text>
  const { AddReservationScreen: { newReservation } } = data
  const updateNewReservation = (target: string, text: string) => ({
    data: {
      ...data,
      AddReservationScreen: {
        ...data.AddReservationScreen,
        newReservation: {
          ...newReservation,
          hotelName: text,
        },
      },
    },
  })

  return (
    <>
      <Text>Add a reservation</Text>
      <TextInput
        value={newReservation.hotelName}
        onChangeText={text => client.writeData(updateNewReservation('hotelName', text))}
      />
    </>
  )
}

AddReservation.navigationOptions = {
  headerTitle: 'Add New Reservation',
}

export default AddReservation
