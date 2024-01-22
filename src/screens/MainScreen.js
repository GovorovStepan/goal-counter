import React from 'react'
import { View } from 'react-native'
import { Appbar, ActivityIndicator, Text } from 'react-native-paper'
import GoalList from '../components/GoalsList'
import { useSelector } from 'react-redux'
import LinkToSite from '../components/LinkToSite'
import DeleteDialog from '../components/DeleteDialog'

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
      <DeleteDialog />
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 50 }}>
        <Text style={{ marginBottom: 10 }}>
          App developed by{' '}
          <LinkToSite link={process.env.EXPO_PUBLIC_SITE_URL}>
            S.Govorov
          </LinkToSite>
        </Text>
        <LinkToSite link={process.env.EXPO_PUBLIC_COFFEE_URL}>
          Buy coffee for developer
        </LinkToSite>
      </View>
    </View>
  )
}
