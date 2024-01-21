import React from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, ProgressBar, Text, useTheme } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { updateGoalAmountInStorage } from '../reducers/goalsReducer'

export default function GoalElement({ uuid }) {
  const theme = useTheme()
  const data = useSelector((state) => state.goals[uuid])
  const dispatch = useDispatch()

  const plus = (sum) => {
    if (data.current_amount < data.amount) {
      dispatch(updateGoalAmountInStorage(uuid, data.current_amount + sum))
    }
  }

  const minus = (sum) => {
    if (data.current_amount - sum >= 0) {
      dispatch(updateGoalAmountInStorage(uuid, data.current_amount - sum))
    }
  }

  return (
    <View
      style={{
        ...styles.main_container,
        borderColor: theme.colors.card_background,
      }}
    >
      <View style={styles.header_container}>
        <Text variant="titleMedium">{data.title}</Text>
      </View>
      <View style={styles.progress_container}>
        <IconButton
          icon="minus-circle-outline"
          size={24}
          onPress={() => minus(50)}
        />
        <View style={styles.progress_bar}>
          <ProgressBar progress={data.current_amount / data.amount} />
        </View>
        <IconButton
          icon="plus-circle-outline"
          size={24}
          onPress={() => plus(100)}
        />
      </View>
      <View style={styles.footer_container}>
        <Text variant="bodyMedium">
          {data.current_amount} out of {data.amount}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  progress_bar: {
    width: '100%',
    maxWidth: 240,
  },
  progress_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  header_container: {
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  footer_container: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
  },
})
