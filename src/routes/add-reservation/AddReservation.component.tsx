import React from 'react'
import { Text } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

const GET_TEST_STATE = gql`
  query App {
    test @client
  }
`

const AddReservation: NavigationStackScreenComponent = () => {
  const { data } = useQuery(GET_TEST_STATE)
  return (
    <>
      <Text>Add a reservation</Text>
      <Text>{data.test}</Text>
    </>
  )
}

AddReservation.navigationOptions = {
  headerTitle: 'Add New Reservation',
}

export default AddReservation
