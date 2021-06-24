'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.ActivityIndicator = void 0

var _react = _interopRequireDefault(require('react'))

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

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

const restyleFunctions = [_restyle.layout]

const ActivityIndicator = ({ color = 'text', ...rest }) => {
  const { colors } = (0, _restyle.useTheme)()
  const props = (0, _restyle.useRestyle)(restyleFunctions, { ...rest })
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.ActivityIndicator,
    _extends({}, props, {
      color: colors[color],
    })
  )
}

exports.ActivityIndicator = ActivityIndicator
//# sourceMappingURL=ActivityIndicator.js.map
