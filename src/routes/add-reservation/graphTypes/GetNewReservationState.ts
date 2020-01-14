/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNewReservationState
// ====================================================

export interface GetNewReservationState_AddReservationScreen_newReservation {
  __typename: "Reservation";
  hotelName: string;
  name: string;
  departureDate: string;
  arrivalDate: string;
  id: string;
}

export interface GetNewReservationState_AddReservationScreen {
  __typename: "AddReservationScreenState";
  newReservation: GetNewReservationState_AddReservationScreen_newReservation;
}

export interface GetNewReservationState {
  AddReservationScreen: GetNewReservationState_AddReservationScreen;
}
