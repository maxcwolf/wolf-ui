'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Button = void 0

var _react = _interopRequireDefault(require('react'))

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

var _restyleFunctions = require('../helpers/restyleFunctions')

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

const Button = (0, _restyle.createRestyleComponent)(
  [
    ..._restyleFunctions.generalRestyleFunctions,
    (0, _restyle.createVariant)({
      themeKey: 'buttonVariants',
    }),
  ],
  ({ children, ...rest }) =>
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.Pressable,
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
exports.Button = Button
//# sourceMappingURL=Button.js.map
