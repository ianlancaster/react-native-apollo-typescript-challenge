import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { ReservationOrderByInput } from 'types/GlobalGraphTypes'
import { GetReservationsData, GetReservationsDataVariables } from './graphTypes/GetReservationsData'

const GET_RESERVATIONS = gql`
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

export const useReservations = () => useQuery<GetReservationsData, GetReservationsDataVariables>(
  GET_RESERVATIONS,
  { variables: { orderBy: ReservationOrderByInput.arrivalDate_ASC } },
)
