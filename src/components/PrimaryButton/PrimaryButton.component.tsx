import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './PrimaryButton.styles'

type PrimaryButtonProps = {
  onPress: () => void,
  buttonText: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonBody}>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
)

export default PrimaryButton
