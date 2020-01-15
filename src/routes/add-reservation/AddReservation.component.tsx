import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { useGetNewReservation } from './AddReservation.queries'
import { useUpdateNewReservation, useCreateReservation, useResetNewReservation } from './AddReservation.mutations'
import styles from './AddReservation.styles'
import { isCompleteReservation } from 'routes/reservations/Reservations.selectors'
import { Reservation } from 'types/models'
import { GET_RESERVATIONS } from 'routes/reservations/Reservations.queries'
import { GetReservationsData } from 'routes/reservations/graphTypes/GetReservationsData'
import { ReservationOrderByInput } from 'types/GlobalGraphTypes'

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

const AddReservation: NavigationStackScreenComponent = ({ navigation }) => {
  const { data } = useGetNewReservation()
  if (!data) return <Text>Not Found.</Text>
  const { screenState: { newReservation } } = data
  const [createReservation] = useCreateReservation({ variables: newReservation })
  const [resetNewReservation] = useResetNewReservation()
  const [showError, setShowError] = useState(false)

  const handleAddReservationClick = () => {
    const dataValid = isCompleteReservation(newReservation)
    setShowError(!dataValid)
    if (dataValid) {
      createReservation({
        update: (cache, { data }) => {
          if (!data) return
          const { createReservation: newReservation } = data
          const queryResult = cache.readQuery<GetReservationsData>({
            query: GET_RESERVATIONS,
            variables: { orderBy: ReservationOrderByInput.updatedAt_DESC },
          })

          if (queryResult) {
            const { reservations } = queryResult
            cache.writeQuery({
              query: GET_RESERVATIONS,
              variables: { orderBy: ReservationOrderByInput.updatedAt_DESC },
              data: { reservations: [newReservation, ...reservations] },
            })

            resetNewReservation()

            navigation.navigate('Reservations')
          }
        },
      })
    }
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
