import 'react-native'
import React from 'react'
import App from './App.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

describe('App.component', () => {
  const wrapper = mount(<App />)

  it('renders correctly using the react native renderer', () => {
    renderer.create(<App />)
  })

  it('Should start on the Reservations route with a header tite of "Reservations"', () => {
    expect(wrapper.find('HeaderSegment'))
      .toHaveProp({ title: 'Reservations' })
  })

  it('mounts with enzyme correctly', () => {
    expect(wrapper).toExist()
  })
})
