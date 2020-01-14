import { gql } from 'apollo-boost'

export const GET_RESERVATIONS = gql`
  query GetReservationsData($orderBy: ReservationOrderByInput) {
    reservations(orderBy: $orderBy) {
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`
