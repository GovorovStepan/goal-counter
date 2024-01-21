import React from 'react'
import { Text } from 'react-native-paper'
import GoalElement from './GoalElement'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

export default function GoalList() {
  const goals = useSelector((state) => state.goals)
  return goals && Object.keys(goals).length ? (
    Object.keys(goals).map((index) => <GoalElement key={index} uuid={index} />)
  ) : (
    <View style={{ marginTop: '50%', display: 'flex', alignItems: 'center' }}>
      <Text variant="headlineSmall">Empty...</Text>
    </View>
  )
}
