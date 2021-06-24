'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Pressable = void 0

var _react = _interopRequireDefault(require('react'))

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

var _restyleFunctions = require('../helpers/restyleFunctions')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const Pressable = props => {
  const restyleProps = (0, _restyle.useRestyle)(_restyleFunctions.generalRestyleFunctions, props)
  return /*#__PURE__*/ _react.default.createElement(_reactNative.Pressable, restyleProps)
}

exports.Pressable = Pressable
//# sourceMappingURL=Pressable.js.map
