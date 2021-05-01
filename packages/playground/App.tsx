import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@wolf-ui/components'
import { theme } from '@wolf-ui/theme'
import { StorybookUi } from './storybook'

export const App = () => (
  <SafeAreaProvider>
    {/* <ThemeProvider theme={theme}> */}
    <StorybookUi />
    {/* </ThemeProvider> */}
  </SafeAreaProvider>
)
