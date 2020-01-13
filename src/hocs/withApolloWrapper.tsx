import React from 'react'

function withApolloWrapper<TProps> (
  Component: React.ComponentType<TProps>,
) {
  return (props: TProps) => {
    return <Component {...props} />
  }
}

export default withApolloWrapper
