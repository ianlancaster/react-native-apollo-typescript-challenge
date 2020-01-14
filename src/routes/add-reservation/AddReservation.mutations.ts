import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import {
  UpdateNewReservation,
  UpdateNewReservationVariables,
} from './graphTypes/updateNewReservation'

export const UPDATE_NEW_RESERVATION = gql`
  mutation UpdateNewReservation($target: String, $text: String) {
    updateNewReservation(target: $target, text: $text) @client {
      hotelName,
      name,
      departureDate,
      arrivalDate,
      id
    }
  }
`

export const useUpdateNewReservation = () => useMutation<
  UpdateNewReservation,
  UpdateNewReservationVariables
>(UPDATE_NEW_RESERVATION)
