import { reservationsFactory } from 'test/factories'
import { GetReservationsData } from 'routes/reservations/graphTypes/GetReservationsData'

// ====================================================
// Reservation
// ====================================================

export const MOCK_GET_RESERVATIONS_DATA: GetReservationsData = {
  reservations: reservationsFactory(5),
}

// ====================================================
// End
// ====================================================
