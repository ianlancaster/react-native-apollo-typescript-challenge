import { ReactWrapper } from 'enzyme'

export const testIdIs = (testId: string) => (node: ReactWrapper) => (
  node.prop('testID') === testId
)
