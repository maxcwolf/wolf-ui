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
import { Pressable } from 'react-native'
import { createRestyleComponent, createVariant } from '@shopify/restyle'
import { generalRestyleFunctions } from '../helpers/restyleFunctions'
export const Button = createRestyleComponent(
  [
    ...generalRestyleFunctions,
    createVariant({
      themeKey: 'buttonVariants',
    }),
  ],
  ({ children, ...rest }) =>
    /*#__PURE__*/ React.createElement(
      Pressable,
      _extends(
        {
          accessibilityRole: 'button',
          alignItems: 'center',
          android_ripple: null,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        rest
      ),
      children
    )
)
//# sourceMappingURL=Button.js.map
