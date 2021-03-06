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
  textInput: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
})

export default styles
