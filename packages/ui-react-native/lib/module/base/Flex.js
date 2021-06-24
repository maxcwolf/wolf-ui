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

import React, { forwardRef } from 'react'
import { View } from 'react-native'
import { spacing, border, backgroundColor, layout, useRestyle } from '@shopify/restyle'
const restyleFunctions = [spacing, border, backgroundColor, layout]
export const Flex = /*#__PURE__*/ forwardRef(({ children, ...restProps }, ref) => {
  const props = useRestyle(restyleFunctions, {
    /** Todo: Add Default Props we may want to add i.e....
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'nowrap',
      */
    ...restProps,
  })
  return /*#__PURE__*/ React.createElement(
    View,
    _extends(
      {
        ref: ref,
      },
      props
    ),
    children
  )
})
//# sourceMappingURL=Flex.js.map
