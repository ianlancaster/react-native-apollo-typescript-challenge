import { Reservation } from 'types/models'
import { GetReservationsData } from './graphTypes/GetReservationsData'

export const filterIncompleteReservations = (data: GetReservationsData) => (
  data.reservations.filter(reservation => (
    reservation
    && reservation.id
    && reservation.name
    && reservation.hotelName
    && reservation.arrivalDate
    && reservation.departureDate
  )) as Reservation[]
)
