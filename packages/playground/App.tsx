import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StorybookUi } from './storybook'

export const App = () => (
  <SafeAreaProvider>
    <StorybookUi />
  </SafeAreaProvider>
)
