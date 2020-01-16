import { ReactWrapper } from 'enzyme'

export const testIdIs = (testId: string) => (node: ReactWrapper) => (
  node.prop('testID') === testId
)

export const mockNavigation: any = {
  push: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  addListener: jest.fn(),
}
