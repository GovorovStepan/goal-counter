import React from 'react'
import { Text } from 'react-native-paper'
import GoalElement from './GoalElement'
import { View } from 'react-native'

export default function GoalList({ storedData }) {
  return storedData.length ? (
    storedData.map((item, index) => (
      <GoalElement
        key={item.uuid}
        current_amount={item.current_amount}
        amount={item.amount}
        title={item.title}
      />
    ))
  ) : (
    <View style={{ marginTop: '50%', display: 'flex', alignItems: 'center' }}>
      <Text variant="headlineSmall">Empty...</Text>
    </View>
  )
}
