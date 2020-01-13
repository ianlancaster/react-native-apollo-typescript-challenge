import React from 'react'
import { Alert } from 'react-native'
import { DocumentNode } from 'graphql'
import { useQuery } from '@apollo/react-hooks'
import DefaultLoader from 'components/DefaultLoader'
import { QueryHookOptions } from '@apollo/react-hooks/lib/types'

function withApolloWrapper<TProps, TData, TVars> (
  Component: React.ComponentType<TProps>,
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVars>,
) {
  return (props: TProps) => {
    const { loading, error, data } = useQuery<TData, TVars>(query, options)

    if (loading) return <DefaultLoader />

    if (error) Alert.alert('Error', error.message)

    if (data) return <Component data={data} {...props} />

    return null
  }
}

export default withApolloWrapper
