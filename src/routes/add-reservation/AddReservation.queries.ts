import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { GetNewReservationState } from './graphTypes/GetNewReservationState'

export const GET_NEW_RESERVATION = gql`
  query GetNewReservationState {
    screenState: AddReservationScreen @client {
      newReservation {
        hotelName,
        name,
        departureDate,
        arrivalDate,
        id
      }
    }
  }
`

export const useGetNewReservation = () => useQuery<GetNewReservationState>(GET_NEW_RESERVATION)
