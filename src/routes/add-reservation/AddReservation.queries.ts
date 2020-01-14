import { gql } from 'apollo-boost'

export const GET_NEW_RESERVATION = gql`
  query GetNewReservationState {
    AddReservationScreen {
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
