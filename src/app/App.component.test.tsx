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

  it('mounts with enzyme correctly', () => {
    expect(wrapper).toExist()
  })

  it('Should start on the Reservations route with a header title of "Reservations"', () => {
    expect(wrapper.find('HeaderSegment'))
      .toHaveProp({ title: 'Reservations' })
  })
})
