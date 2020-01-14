import React from 'react'
import { Alert, Text } from 'react-native'
import { DocumentNode } from 'graphql'
import { useQuery } from '@apollo/react-hooks'
import DefaultLoader from 'components/DefaultLoader'
import { QueryHookOptions } from '@apollo/react-hooks/lib/types'

function withApolloWrapper<TProps, TData, TVars> (
  Component: React.FC<TProps>,
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVars>,
) {
  const WrapperComponent: React.FC<TProps> = props => {
    const { loading, error, data } = useQuery<TData, TVars>(query, options)

    if (loading) return <DefaultLoader />

    if (error) Alert.alert('Error', error.message)

    if (!data) return <Text>Not Found!</Text>

    return <Component data={data} {...props} />
  }

  return WrapperComponent
}

export default withApolloWrapper
