import { ApolloCache } from 'apollo-cache'
import { Resolvers as BaseResolvers } from 'apollo-client'
import addReservationResolvers from 'routes/add-reservation/AddReservation.resolvers'

type ResolverContext = {
  cache: ApolloCache<any>
}

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: ResolverContext
) => any;

export interface ResolverMap {
  [field: string]: ResolverFn;
}

interface Resolvers extends BaseResolvers {
  Mutation: ResolverMap
}

const resolvers: Resolvers = {
  Mutation: {
    ...addReservationResolvers,
  },
}

export default resolvers
