import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { useGetNewReservation } from './AddReservation.queries'
import { useUpdateNewReservation, useCreateReservation } from './AddReservation.mutations'
import styles from './AddReservation.styles'
import { isCompleteReservation } from 'routes/reservations/Reservations.selectors'
import { Reservation } from 'types/models'

type Target = 'hotelName' | 'name' | 'arrivalDate' | 'departureDate'
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

const AddReservation: NavigationStackScreenComponent = () => {
  const { data } = useGetNewReservation()
  if (!data) return <Text>Not Found.</Text>
  const { screenState: { newReservation } } = data
  const [createReservation] = useCreateReservation({ variables: newReservation })
  const [showError, setShowError] = useState(false)

  const handleAddReservationClick = () => {
    const dataValid = isCompleteReservation(newReservation)
    setShowError(!dataValid)
    if (dataValid) createReservation()
  }

  return (
    <View style={styles.screenContainer}>
      <View>
        <LabeledInput label='Hotel Name' target='hotelName' newReservation={newReservation} />
        <LabeledInput label='Name' target='name' newReservation={newReservation} />
        <LabeledInput label='Arrival Date' target='arrivalDate' newReservation={newReservation} />
        <LabeledInput label='Departure Date' target='departureDate' newReservation={newReservation} />
      </View>

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
