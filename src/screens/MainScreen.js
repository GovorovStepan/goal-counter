import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View } from 'react-native'
import { Appbar, ActivityIndicator } from 'react-native-paper'
import GoalList from '../components/GoalsList'
import { loadData, clearAsyncStorage } from '../services/storageService'

export default function MainScreen({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [storedData, setStoredData] = useState([])
  // clearAsyncStorage()

  const fetchData = async () => {
    try {
      const data = await loadData('goals')
      console.log('data', data)

      if (data) {
        setStoredData(data)
      }

      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, [])
  )

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
        {!loading && <GoalList storedData={storedData} />}
      </View>
    </View>
  )
}
