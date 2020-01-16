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
  dispatch: jest.fn(),
  goBack: jest.fn(),
  dismiss: jest.fn(),
  navigate: jest.fn(),
  openDrawer: jest.fn(),
  closeDrawer: jest.fn(),
  toggleDrawer: jest.fn(),
  getParam: jest.fn(),
  setParams: jest.fn(),
  emit: jest.fn(),
  isFocused: jest.fn(),
  isFirstRouteInParent: jest.fn(),
  dangerouslyGetParent: jest.fn(),
}
