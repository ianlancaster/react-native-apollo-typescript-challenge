import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { MutationHookOptions } from '@apollo/react-hooks/lib/types'
import {
  UpdateNewReservation,
  UpdateNewReservationVariables,
} from './graphTypes/updateNewReservation'
import { ResetNewReservation } from './graphTypes/ResetNewReservation'
import { CreateReservation, CreateReservationVariables } from './graphTypes/CreateReservation'

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

export const RESET_NEW_RESERVATION = gql`
  mutation ResetNewReservation {
    resetNewReservation @client {
      hotelName,
      name,
      departureDate,
      arrivalDate,
      id      
    }
  }
`

export const useResetNewReservation = () => useMutation<ResetNewReservation>(RESET_NEW_RESERVATION)

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
      hotelName,
      name,
      departureDate,
      arrivalDate,
      id
    }
  }
`

export const useCreateReservation = (
  options?: MutationHookOptions<CreateReservation, CreateReservationVariables>,
) => useMutation<
  CreateReservation,
  CreateReservationVariables
>(CREATE_RESERVATION, options)
