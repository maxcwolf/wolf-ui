import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@shopify/restyle'
export const Spacer = ({ size = 'm', backgroundColor = 'transparent' }) => {
  const theme = useTheme()
  return /*#__PURE__*/ React.createElement(View, {
    style: {
      height: theme.spacing[size],
      backgroundColor,
    },
  })
}
//# sourceMappingURL=Spacer.js.map
