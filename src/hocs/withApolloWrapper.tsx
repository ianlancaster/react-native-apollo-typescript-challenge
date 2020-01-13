import React from 'react'

function withApolloWrapper<Props> (Component: React.ComponentType<Props>) {
  return (props: Props) => {
    return <Component {...props} />
  }
}

export default withApolloWrapper
