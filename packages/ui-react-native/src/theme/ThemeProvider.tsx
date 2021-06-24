import React, { FC, ReactNode } from 'react'
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'
import { themeDxm as defaultTheme, Theme } from './'

export const ThemeProvider: FC<{
  theme?: Theme
  children: ReactNode | unknown
}> = ({ theme = defaultTheme, children }) => (
  <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>
)
