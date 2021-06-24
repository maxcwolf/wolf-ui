import React from 'react'
import { useRestyle } from '@shopify/restyle'
import { TouchableOpacity as RNTouchableOpacity } from 'react-native'
import { generalRestyleFunctions } from '../helpers/restyleFunctions'
export const TouchableOpacity = props => {
  const restyleProps = useRestyle(generalRestyleFunctions, props)
  return /*#__PURE__*/ React.createElement(RNTouchableOpacity, restyleProps)
}
//# sourceMappingURL=TouchableOpacity.js.map
