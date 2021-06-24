'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Card = void 0

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

var _restyleFunctions = require('../helpers/restyleFunctions')

const Card = (0, _restyle.createRestyleComponent)(
  [
    ..._restyleFunctions.cardRestyleFunctions,
    (0, _restyle.createVariant)({
      themeKey: 'cardVariants',
    }),
  ],
  _reactNative.View
)
exports.Card = Card
//# sourceMappingURL=Card.js.map
