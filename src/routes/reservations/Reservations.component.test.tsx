import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MOCK_GET_RESERVATIONS_DATA } from 'test/fixtures'
import { mockNavigation } from 'test/testHelpers'
import Reservations from './Reservations.component'

describe('Reservations.component', () => {
  const ReservationsComponent = (
    <Reservations
      theme='light'
      navigation={mockNavigation}
      screenProps={{}}
      data={MOCK_GET_RESERVATIONS_DATA}
    />
  )

  const wrapper = mount(ReservationsComponent)

  it('renders correctly', () => {
    const renderTree = renderer.create(ReservationsComponent).toJSON()
    expect(renderTree).toMatchSnapshot()
  })

  it('should render a primary button with the text "Add New Reservation" that navigates to the appropriate route', () => {
    const PrimaryButton: any = wrapper.find('PrimaryButton')
    expect(PrimaryButton).toExist()
    expect(PrimaryButton).toHaveText('Add New Reservation')
    PrimaryButton.props().onPress()
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddReservation')
  })
})
