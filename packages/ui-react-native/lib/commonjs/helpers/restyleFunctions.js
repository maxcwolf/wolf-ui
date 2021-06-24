'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.cardRestyleFunctions =
  exports.buttonRestyleFunctions =
  exports.textRestyleFunctions =
  exports.generalRestyleFunctions =
    void 0

var _restyle = require('@shopify/restyle')

var _customShadow = require('./customShadow')

const generalRestyleFunctions = [
  _restyle.backgroundColor,
  _restyle.opacity,
  _restyle.visible,
  _restyle.layout,
  _restyle.spacing,
  _restyle.border,
  _restyle.position,
  _restyle.backgroundColorShorthand,
  _restyle.spacingShorthand,
  _restyle.color,
  _restyle.typography,
  _customShadow.customShadowFunctions,
]
exports.generalRestyleFunctions = generalRestyleFunctions
const textRestyleFunctions = [
  _restyle.color,
  _restyle.opacity,
  _restyle.visible,
  _restyle.typography,
  _restyle.textShadow,
  _restyle.spacing,
]
exports.textRestyleFunctions = textRestyleFunctions
const buttonRestyleFunctions = [
  _restyle.spacing,
  _restyle.border,
  _restyle.backgroundColor,
  _customShadow.customShadowFunctions,
]
exports.buttonRestyleFunctions = buttonRestyleFunctions
const cardRestyleFunctions = [
  _restyle.backgroundColor,
  _restyle.backgroundColorShorthand,
  _restyle.border,
  _restyle.layout,
  _restyle.spacing,
  _restyle.spacingShorthand,
  _customShadow.customShadowFunctions,
]
exports.cardRestyleFunctions = cardRestyleFunctions
//# sourceMappingURL=restyleFunctions.js.map
