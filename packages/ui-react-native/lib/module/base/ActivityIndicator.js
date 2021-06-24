function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

import React from 'react'
import { ActivityIndicator as RNActivityIndicator } from 'react-native'
import { useTheme, useRestyle, layout } from '@shopify/restyle'
const restyleFunctions = [layout]
export const ActivityIndicator = ({ color = 'text', ...rest }) => {
  const { colors } = useTheme()
  const props = useRestyle(restyleFunctions, { ...rest })
  return /*#__PURE__*/ React.createElement(
    RNActivityIndicator,
    _extends({}, props, {
      color: colors[color],
    })
  )
}
//# sourceMappingURL=ActivityIndicator.js.map
