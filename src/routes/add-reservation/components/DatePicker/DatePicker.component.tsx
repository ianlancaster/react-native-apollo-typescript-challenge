import React from 'react'
import { Text, View } from 'react-native'
import DatePickerBase from 'react-native-datepicker'
import { Reservation } from 'types/models'
import { useUpdateNewReservation } from 'routes/add-reservation/AddReservation.mutations'
import styles from './DatePicker.styles'

type Target = 'arrivalDate' | 'departureDate'
type DatePickerProps = { label: string, target: Target, newReservation: Reservation }

const DatePicker: React.FC<DatePickerProps> = ({ label, target, newReservation }) => {
  const [updateNewReservation] = useUpdateNewReservation()
  return (
    <>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <DatePickerBase
          mode='date'
          placeholder='Select Date'
          format='M-D-YYYY'
          date={newReservation[target]}
          minDate={newReservation.arrivalDate || (new Date()).toLocaleDateString()}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          onDateChange={dateStr => updateNewReservation({ variables: { target, text: dateStr } })}
          customStyles={{
            dateInput: styles.dateInput,
            dateText: styles.dateText,
            placeholderText: styles.placeholderText,
          }}
          style={styles.datePicker}
        />
      </View>
    </>
  )
}

export default DatePicker
