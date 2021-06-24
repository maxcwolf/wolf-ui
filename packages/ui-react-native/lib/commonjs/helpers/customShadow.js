'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.customShadowFunctions = void 0

var _restyle = require('@shopify/restyle')

var _keys = require('./keys')

/**
 * @description Custom Shadow Restyle Functions which adds theme access for `shadowRadius`
 * @see https://github.com/Shopify/restyle#custom-restyle-functions
 */
const shadowProperties = {
  shadowOpacity: true,
  shadowOffset: true,
  elevation: true,
}
const customShadowFunctions = [
  ...(0, _keys.getKeys)(shadowProperties).map(property =>
    (0, _restyle.createRestyleFunction)({
      property,
    })
  ),
  (0, _restyle.createRestyleFunction)({
    property: 'shadowColor',
    themeKey: 'colors',
  }),
  (0, _restyle.createRestyleFunction)({
    property: 'shadowRadius',
    themeKey: 'borderRadii',
  }),
]
exports.customShadowFunctions = customShadowFunctions
//# sourceMappingURL=customShadow.js.map
