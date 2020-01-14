import React from 'react'
import { Text } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

const AddReservation: NavigationStackScreenComponent = () => {
  return (
    <Text>Add a reservation</Text>
  )
}

AddReservation.navigationOptions = {
  headerTitle: 'Profile',
}

export default AddReservation
