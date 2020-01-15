import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { useGetNewReservation } from './AddReservation.queries'
import { useUpdateNewReservation } from './AddReservation.mutations'
import styles from './AddReservation.styles'
import { isCompleteReservation } from 'routes/reservations/Reservations.selectors'

const AddReservation: NavigationStackScreenComponent = () => {
  const { data } = useGetNewReservation()
  if (!data) return <Text>Not Found.</Text>
  const { screenState: { newReservation } } = data
  const [updateNewReservation] = useUpdateNewReservation()
  const [showError, setShowError] = useState(false)

  const handleAddReservationClick = () => {
    const dataValid = isCompleteReservation(newReservation)
    setShowError(!dataValid)
    if (dataValid) console.log('Adding reservation!')
  }

  type LabeledInputProps = { label: string, target: string }
  const LabeledInput = ({ label, target }: LabeledInputProps) => (
    <>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
      <TextInput
        style={styles.textInput}
        value={newReservation.hotelName}
        onChangeText={text => updateNewReservation({ variables: { target, text } })}
      />
    </>
  )

  return (
    <View style={styles.screenContainer}>
      <LabeledInput label='Hotel Name' target='hotelName' />
      <LabeledInput label='Name' target='name' />
      <LabeledInput label='Arrival Date' target='arrivalDate' />
      <LabeledInput label='Departure Date' target='departureDate' />

      {showError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Please complete all fields.</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={handleAddReservationClick}
        style={styles.addReservationButton}
      >
        <Text style={styles.buttonText}>Add New Reservation</Text>
      </TouchableOpacity>
    </View>
  )
}

AddReservation.navigationOptions = {
  headerTitle: 'Add New Reservation',
}

export default AddReservation
