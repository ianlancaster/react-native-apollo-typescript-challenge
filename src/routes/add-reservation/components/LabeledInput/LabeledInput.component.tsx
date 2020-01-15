import React from 'react'
import { Reservation } from 'types/models'
import { useUpdateNewReservation } from 'routes/add-reservation/AddReservation.mutations'
import { Text, TextInput, View } from 'react-native'
import styles from './LabeledInput.styles'

type Target = 'hotelName' | 'name'
type LabeledInputProps = { label: string, target: Target, newReservation: Reservation }

const LabeledInput = ({
  label,
  target,
  newReservation,
}: LabeledInputProps) => {
  const [updateNewReservation] = useUpdateNewReservation()
  return (
    <>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
      <TextInput
        key={`${target}-input`}
        style={styles.textInput}
        value={newReservation[target]}
        onChangeText={text => updateNewReservation({ variables: { target, text } })}
      />
    </>
  )
}

export default LabeledInput
