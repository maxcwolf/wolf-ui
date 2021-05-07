import React, { FC, ReactNode } from 'react'
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'
import { theme as defaultTheme, Theme } from './default'

export const ThemeProvider: FC<{
  theme?: Theme
  children: ReactNode | unknown
}> = ({ theme = defaultTheme, children }) => (
  <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>
)
