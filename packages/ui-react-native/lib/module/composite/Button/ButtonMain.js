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
import { ActivityIndicator, Box, Text } from '../../base'
import { Button } from '../../base/Button'
import { Icon } from '../icon'
import { getAccentColor, getBaseColor } from './getColorUtils'
export const ButtonMain = ({
  children,
  color = 'primary',
  icon = true,
  loading,
  type,
  variant = 'main',
  ...rest
}) => {
  return /*#__PURE__*/ React.createElement(
    Button,
    _extends(
      {
        bg: getBaseColor(type, color),
        justifyContent: 'space-around',
        pointerEvents: loading ? 'none' : 'auto',
        variant: variant,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(Box, {
      flex: 1,
    }),
    loading
      ? /*#__PURE__*/ React.createElement(ActivityIndicator, {
          color: getAccentColor(type, color),
          flex: 1,
        })
      : /*#__PURE__*/ React.createElement(
          Box,
          {
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'center',
          },
          /*#__PURE__*/ React.createElement(
            Text,
            {
              color: getAccentColor(type, color),
              numberOfLines: 1,
              selectable: false,
              variant: 'buttonTextMain',
            },
            children
          )
        ),
    /*#__PURE__*/ React.createElement(
      Box,
      {
        flex: 1,
      },
      icon &&
        !loading &&
        /*#__PURE__*/ React.createElement(Icon, {
          isRounded: true,
          bg: getAccentColor(type, color),
          color: getBaseColor(type, color),
          name: typeof icon === 'string' ? icon : 'arrow-right',
          type: 'svg',
        })
    )
  )
}
//# sourceMappingURL=ButtonMain.js.map
