import 'react-native'
import 'jest-enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps (src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
copyProps(window, global)

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */

Enzyme.configure({ adapter: new Adapter() })

/**
 * Enzyme adaptor currently throws a bunch of false errors. Fix below. See:
 * https://github.com/airbnb/enzyme/issues/831
 * https://github.com/airbnb/enzyme/issues/1436
 */

const originalConsoleError = console.error
console.error = (message) => {
  if (message.startsWith('Warning:')) return
  originalConsoleError(message)
}

/**
 * Mocks needed to account for react-navigation dependencies
 */

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View')
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  }
})
