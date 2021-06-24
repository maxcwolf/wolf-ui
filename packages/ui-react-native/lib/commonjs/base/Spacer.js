'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Spacer = void 0

var _react = _interopRequireDefault(require('react'))

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const Spacer = ({ size = 'm', backgroundColor = 'transparent' }) => {
  const theme = (0, _restyle.useTheme)()
  return /*#__PURE__*/ _react.default.createElement(_reactNative.View, {
    style: {
      height: theme.spacing[size],
      backgroundColor,
    },
  })
}

exports.Spacer = Spacer
//# sourceMappingURL=Spacer.js.map
