import { NavigationStackScreenProps } from 'react-navigation-stack'
import { GetReservationsData } from './graphTypes/GetReservationsData'

export type ReservationsProps = NavigationStackScreenProps & {
  data: GetReservationsData
}
