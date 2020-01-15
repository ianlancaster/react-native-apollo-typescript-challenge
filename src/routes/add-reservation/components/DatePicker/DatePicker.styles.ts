import { StyleSheet } from 'react-native'
import { headingColor } from 'styles/colors'

const styles = StyleSheet.create({
  inputLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 20,
    marginTop: 10,
    color: headingColor,
  },
  datePicker: {
    width: '100%',
  },
  dateInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'gray',
  },
  dateText: { fontSize: 18 },
  placeholderText: { fontSize: 18 },
})

export default styles
