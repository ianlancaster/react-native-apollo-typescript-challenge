import { StyleSheet } from 'react-native'
import { accentBackground, primaryBlue } from 'styles/colors'

export default StyleSheet.create({
  scrollContainer: {
    backgroundColor: accentBackground,
    padding: 5,
  },
  addReservationButton: {
    height: 80,
    backgroundColor: primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
})
