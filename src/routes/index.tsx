import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Reservations from './reservations'

const Routes = createStackNavigator({
  Reservations: {
    screen: Reservations,
  },
}, {
  initialRouteName: 'Reservations',
})

export default createAppContainer(Routes)
