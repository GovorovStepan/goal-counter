import React from 'react'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper'
import CreateForm from '../components/CreateForm'

export default function CreateScreen({ navigation }) {
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('MainScreen')} />
        <Appbar.Content title="Create new (max 3)" />
      </Appbar.Header>
      <View>
        <CreateForm />
      </View>
    </View>
  )
}
