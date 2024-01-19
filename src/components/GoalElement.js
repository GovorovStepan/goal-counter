import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, ProgressBar, Text, useTheme } from 'react-native-paper'

export default function GoalElement({ current_amount, amount, title }) {
  const theme = useTheme()

  const [currentAmount, setCurrentAmount] = useState(current_amount)
  const [progress, setProgress] = useState(current_amount / amount)

  useEffect(() => {
    setProgress(calculateProgress())
  }, [currentAmount])

  const plus = (sum) => {
    if (currentAmount < amount) {
      setCurrentAmount(currentAmount + sum)
    }
  }

  const minus = (sum) => {
    if (currentAmount - sum >= 0) {
      setCurrentAmount(currentAmount - sum)
    }
  }

  const calculateProgress = () => {
    return currentAmount / amount
  }

  return (
    <View
      style={{
        ...styles.main_container,
        borderColor: theme.colors.card_background,
      }}
    >
      <View style={styles.header_container}>
        <Text variant="titleMedium">{title}</Text>
      </View>
      <View style={styles.progress_container}>
        <IconButton
          icon="minus-circle-outline"
          size={24}
          onPress={() => minus(50)}
        />
        <View style={styles.progress_bar}>
          <ProgressBar progress={progress} />
        </View>
        <IconButton
          icon="plus-circle-outline"
          size={24}
          onPress={() => plus(100)}
        />
      </View>
      <View style={styles.footer_container}>
        <Text variant="bodyMedium">
          {currentAmount} out of {amount}
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
