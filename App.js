import { StatusBar } from 'expo-status-bar'
import { theme } from './src/core/theme'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-native-paper'
import { MainScreen, CreateScreen } from './src/screens'
import { Provider as ReduxProvider } from 'react-redux'
import { loadGoalsFromStorage } from './src/reducers/goalsReducer'
import { appLoaded } from './src/reducers/statusReducer'
import store from './src/store'

const Stack = createStackNavigator()

export default function App() {
  useEffect(() => {
    store.dispatch(loadGoalsFromStorage())
    store.dispatch(appLoaded())
  }, [])
  return (
    <Provider theme={theme}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MainScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="CreateScreen" component={CreateScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ReduxProvider>
    </Provider>
  )
}
