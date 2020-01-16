import React from 'react'
import { ActivityIndicator } from 'react-native'
import { darkBlue } from 'styles/colors'
import styles from './DefaultLoader.styles'

const DefaultLoader: React.FC = () => (
  <ActivityIndicator
    testID='outer-activity-indicator'
    size='large'
    color={darkBlue}
    style={styles.loader}
  />
)

export default DefaultLoader
