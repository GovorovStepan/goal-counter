import React from 'react'
import { Linking } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

export default function LinkToSite({ link, children }) {
  const theme = useTheme()

  const openWebsite = () => {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link)
      } else {
        console.error("Couldn't open the website URL")
      }
    })
  }

  return (
    <Text
      onPress={openWebsite}
      style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}
    >
      {children}
    </Text>
  )
}
