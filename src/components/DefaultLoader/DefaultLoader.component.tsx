import React from 'react'
import { ActivityIndicator } from 'react-native'
import { darkBlue } from 'styles/colors'
import styles from './DefaultLoader.styles'

const DefaultLoader: React.FC = () => (
  <ActivityIndicator
    size='large'
    color={darkBlue}
    style={styles.loader}
  />
)

export default DefaultLoader
