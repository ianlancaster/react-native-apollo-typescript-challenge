import { Reservation } from 'types/models'
import { GetReservationsData } from './graphTypes/GetReservationsData'

export const isCompleteReservation = (reservation: Reservation | null) => Boolean(
  reservation
  && reservation.id
  && reservation.name
  && reservation.hotelName
  && reservation.arrivalDate
  && reservation.departureDate,
)

export const filterIncompleteReservations = (data: GetReservationsData) => (
  data.reservations.filter(isCompleteReservation) as Reservation[]
)
