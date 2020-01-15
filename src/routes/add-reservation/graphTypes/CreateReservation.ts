/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateReservation
// ====================================================

export interface CreateReservation_createReservation {
  __typename: "Reservation";
  hotelName: string;
  name: string;
  departureDate: string;
  arrivalDate: string;
  id: string;
}

export interface CreateReservation {
  createReservation: CreateReservation_createReservation;
}

export interface CreateReservationVariables {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}
