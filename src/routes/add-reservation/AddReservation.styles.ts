import { StyleSheet } from 'react-native'
import { headingColor, primaryBlue } from 'styles/colors'

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 20,
    marginTop: 10,
    color: headingColor,
  },
  textInput: {
    fontSize: 18,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
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
