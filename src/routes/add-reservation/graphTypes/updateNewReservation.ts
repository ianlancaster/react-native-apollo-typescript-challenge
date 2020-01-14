/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateNewReservation
// ====================================================

export interface UpdateNewReservation_updateNewReservation {
  __typename: "Reservation";
  hotelName: string;
  name: string;
  departureDate: string;
  arrivalDate: string;
  id: string;
}

export interface UpdateNewReservation {
  updateNewReservation: UpdateNewReservation_updateNewReservation;
}

export interface UpdateNewReservationVariables {
  target?: string | null;
  text?: string | null;
}
