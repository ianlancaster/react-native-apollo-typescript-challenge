import React from 'react'
import { Text, TextInput } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { useGetNewReservation } from './AddReservation.queries'
import { useUpdateNewReservation } from './AddReservation.mutations'

const AddReservation: NavigationStackScreenComponent = () => {
  const { data } = useGetNewReservation()
  if (!data) return <Text>Not Found.</Text>
  const { screenState: { newReservation } } = data
  const [updateNewReservation] = useUpdateNewReservation()

  return (
    <>
      <Text>Add a reservation</Text>
      <TextInput
        value={newReservation.hotelName}
        onChangeText={text => updateNewReservation({ variables: { target: 'hotelName', text } })}
      />
    </>
  )
}

AddReservation.navigationOptions = {
  headerTitle: 'Add New Reservation',
}

export default AddReservation
