import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Reservations from './reservations'
import AddReservation from './add-reservation'

const Routes = createStackNavigator({
  Reservations: {
    screen: Reservations,
  },
  AddReservation: {
    screen: AddReservation,
  },
}, {
  initialRouteName: 'Reservations',
})

export default createAppContainer(Routes)
