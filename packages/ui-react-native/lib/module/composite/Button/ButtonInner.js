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
import { Button } from '../../base/Button'
import { ActivityIndicator, Text } from '../../base'
import { getAccentColor, getBaseColor } from './getColorUtils'
export const ButtonInner = ({ children, color = 'primary', loading, type, ...rest }) =>
  /*#__PURE__*/ React.createElement(
    Button,
    _extends(
      {
        bg: getBaseColor(type, color),
        borderColor: getAccentColor(type, color),
        pointerEvents: loading ? 'none' : 'auto',
        variant: 'inner',
      },
      rest
    ),
    loading
      ? /*#__PURE__*/ React.createElement(ActivityIndicator, {
          color: getAccentColor(type, color),
          flex: 1,
          height: 10,
        })
      : /*#__PURE__*/ React.createElement(
          Text,
          {
            color: getAccentColor(type, color),
            numberOfLines: 1,
            selectable: false,
            variant: 'buttonTextInner',
          },
          children
        )
  )
//# sourceMappingURL=ButtonInner.js.map
