import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import DefaultLoader from './DefaultLoader.component'

it('mounts with enzyme correctly', () => {
  const wrapper = mount(<DefaultLoader />)
  expect(wrapper).toExist()
})
