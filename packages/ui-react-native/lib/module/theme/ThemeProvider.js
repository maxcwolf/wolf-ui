import React from 'react'
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'
import { themeDxm as defaultTheme } from './'
export const ThemeProvider = ({ theme = defaultTheme, children }) =>
  /*#__PURE__*/ React.createElement(
    RestyleThemeProvider,
    {
      theme: theme,
    },
    children
  )
//# sourceMappingURL=ThemeProvider.js.map
