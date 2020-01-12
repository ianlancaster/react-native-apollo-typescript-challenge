/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ReservationOrderByInput } from "./../../../types/GlobalGraphTypes";

// ====================================================
// GraphQL query operation: GetReservationsData
// ====================================================

export interface GetReservationsData_reservations {
  __typename: "Reservation";
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export interface GetReservationsData {
  reservations: (GetReservationsData_reservations | null)[];
}

export interface GetReservationsDataVariables {
  orderBy?: ReservationOrderByInput | null;
}
