import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import {
  UpdateNewReservation,
  UpdateNewReservationVariables,
} from './graphTypes/updateNewReservation'
import { MutationHookOptions } from '@apollo/react-hooks/lib/types'

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

export const CREATE_RESERVATION = gql`
  mutation CreateReservation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    createReservation(
      data: {
        name: $name,
        hotelName: $hotelName,
        arrivalDate: $arrivalDate,
        departureDate: $departureDate
      }
    ) {
      id
    }
  }
`

export const useCreateReservation = (options?: MutationHookOptions) => (
  useMutation(CREATE_RESERVATION, options)
)
