import { ResolverMap } from 'store/resolvers'
import { GetNewReservationState } from 'routes/add-reservation/graphTypes/GetNewReservationState'
import { GET_NEW_RESERVATION } from 'routes/add-reservation/AddReservation.queries'
import addReservationDefaultState from './AddReservation.defaultState'

const addReservationResolvers: ResolverMap = {
  updateNewReservation: (parent, args, context) => {
    const { target, text } = args
    const { cache } = context
    const queryResult = cache.readQuery<GetNewReservationState>({ query: GET_NEW_RESERVATION })

    if (queryResult) {
      const { screenState } = queryResult
      const { newReservation } = screenState

      const data = {
        screenState: {
          ...screenState,
          newReservation: {
            ...newReservation,
            [target]: text,
          },
        },
      }

      cache.writeQuery({ query: GET_NEW_RESERVATION, data })

      return data.screenState.newReservation
    }
  },
  resetNewReservation: (parent, args, { cache }) => {
    const queryResult = cache.readQuery<GetNewReservationState>({ query: GET_NEW_RESERVATION })

    if (queryResult) {
      const { screenState } = queryResult

      const data = {
        screenState: {
          ...screenState,
          newReservation: addReservationDefaultState.newReservation,
        },
      }

      cache.writeQuery({ query: GET_NEW_RESERVATION, data })

      return data.screenState.newReservation
    }
  },
}

export default addReservationResolvers
