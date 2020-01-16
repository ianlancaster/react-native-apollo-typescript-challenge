import { Reservation } from 'types/models'

export const reservationFactory = (id: number): Reservation => ({
  __typename: 'Reservation',
  id: `Reservation ${id} - id`,
  name: `Reservation ${id} - name`,
  hotelName: `Reservation ${id} - hotelName`,
  arrivalDate: `Reservation ${id} - arrivalDate`,
  departureDate: `Reservation ${id} - departureDate`,
})

export const reservationsFactory = (num: number): Reservation[] => {
  const reservations = []
  for (let i = 0; i <= (num - 1); i++) {
    reservations.push(reservationFactory(i))
  }
  return reservations
}
