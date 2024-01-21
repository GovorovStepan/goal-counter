import React from 'react'
import { View } from 'react-native'
import { Appbar, ActivityIndicator } from 'react-native-paper'
import GoalList from '../components/GoalsList'
import { useSelector } from 'react-redux'
import AmountDialog from '../components/AmountDiaolog'

export default function MainScreen({ navigation }) {
  const loading = useSelector((state) => state.status.app_loading)

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Main" />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate('CreateScreen')}
        />
      </Appbar.Header>
      <View>
        {loading && (
          <View style={{ marginTop: '50%' }}>
            <ActivityIndicator animating={true} size="large" />
          </View>
        )}
        {!loading && <GoalList />}
      </View>
      <AmountDialog />
    </View>
  )
}
