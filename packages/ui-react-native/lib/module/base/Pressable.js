import React from 'react'
import { Pressable as RNPressable } from 'react-native'
import { useRestyle } from '@shopify/restyle'
import { generalRestyleFunctions } from '../helpers/restyleFunctions'
export const Pressable = props => {
  const restyleProps = useRestyle(generalRestyleFunctions, props)
  return /*#__PURE__*/ React.createElement(RNPressable, restyleProps)
}
//# sourceMappingURL=Pressable.js.map
