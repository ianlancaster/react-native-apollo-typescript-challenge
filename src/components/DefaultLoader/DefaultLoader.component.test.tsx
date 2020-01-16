import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import DefaultLoader from './DefaultLoader.component'
import { darkBlue } from 'styles/colors'
import { testIdIs } from 'test/testHelpers'

describe('DefaultLoader.component', () => {
  const wrapper = mount(<DefaultLoader />)

  it('mounts with enzyme correctly', () => {
    expect(wrapper).toExist()
  })

  it('should contain an ActivityIndicator component', () => {
    expect(wrapper.find('ActivityIndicator')).toExist()
  })

  it('should be colored dark blue', () => {
    expect(wrapper.findWhere(testIdIs('outer-activity-indicator')).first())
      .toHaveProp({ color: darkBlue })
  })
})
