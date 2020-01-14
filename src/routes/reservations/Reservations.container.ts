import React from 'react'
import withApolloWrapper from 'hocs/withApolloWrapper'
import Reservations from './Reservations.component'
import { GET_RESERVATIONS } from './Reservations.queries'
import { ReservationsProps } from './Reservations.types'
import { GetReservationsData, GetReservationsDataVariables } from './graphTypes/GetReservationsData'
import { ReservationOrderByInput } from 'types/GlobalGraphTypes'

export default withApolloWrapper<
  ReservationsProps,
  GetReservationsData,
  GetReservationsDataVariables
>(
  Reservations,
  GET_RESERVATIONS,
  { variables: { orderBy: ReservationOrderByInput.updatedAt_DESC } },
)
