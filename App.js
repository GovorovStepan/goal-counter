import { StatusBar } from 'expo-status-bar'
import { theme } from './src/core/theme'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-native-paper'
import { MainScreen, CreateScreen } from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
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
    </Provider>
  )
}
