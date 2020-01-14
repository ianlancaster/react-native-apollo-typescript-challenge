import { ApolloCache } from 'apollo-cache'
import { Resolvers as BaseResolvers } from 'apollo-client'
import { GET_NEW_RESERVATION } from 'routes/add-reservation/AddReservation.queries'
import { GetNewReservationState } from 'routes/add-reservation/graphTypes/GetNewReservationState'

type ResolverContext = {
  cache: ApolloCache<any>
}

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: ResolverContext
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface Resolvers extends BaseResolvers {
  Mutation: ResolverMap
}

const resolvers: Resolvers = {
  Mutation: {
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
  },
}

export default resolvers
