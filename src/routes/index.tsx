import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Bookings from './bookings'

const Routes = createStackNavigator({
  Bookings: {
    screen: Bookings,
  },
}, {
  initialRouteName: 'Bookings',
})

export default createAppContainer(Routes)
