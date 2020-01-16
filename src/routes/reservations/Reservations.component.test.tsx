import React from 'react'
import { mount } from 'enzyme'
import { MOCK_GET_RESERVATIONS_DATA } from 'test/fixtures'
import { mockNavigation } from 'test/testHelpers'
import Reservations from './Reservations.component'

describe('Reservations.component', () => {
  const wrapper = mount(
    <Reservations
      theme='light'
      navigation={mockNavigation}
      screenProps={{}}
      data={MOCK_GET_RESERVATIONS_DATA}
    />,
  )

  it('should render a primary button with the text "Add New Reservation" that navigates to the appropriate route', () => {
    const PrimaryButton: any = wrapper.find('PrimaryButton')
    expect(PrimaryButton).toExist()
    expect(PrimaryButton).toHaveText('Add New Reservation')
    PrimaryButton.props().onPress()
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddReservation')
  })
})
