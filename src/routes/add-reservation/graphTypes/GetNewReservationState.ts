/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNewReservationState
// ====================================================

export interface GetNewReservationState_screenState_newReservation {
  __typename: "Reservation";
  hotelName: string;
  name: string;
  departureDate: string;
  arrivalDate: string;
  id: string;
}

export interface GetNewReservationState_screenState {
  __typename: "AddReservationScreenState";
  newReservation: GetNewReservationState_screenState_newReservation;
}

export interface GetNewReservationState {
  screenState: GetNewReservationState_screenState;
}
