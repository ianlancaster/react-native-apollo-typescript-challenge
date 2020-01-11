import { StyleSheet } from 'react-native'

import { primaryBackground } from 'src/styles/colors'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: primaryBackground,
    borderWidth: 2,
    borderColor: 'red',
    height: '100%',
    paddingTop: 50,
  },
})

export default styles
