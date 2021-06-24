'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.ThemeProvider = void 0

var _react = _interopRequireDefault(require('react'))

var _restyle = require('@shopify/restyle')

var _ = require('./')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const ThemeProvider = ({ theme = _.themeDxm, children }) =>
  /*#__PURE__*/ _react.default.createElement(
    _restyle.ThemeProvider,
    {
      theme: theme,
    },
    children
  )

exports.ThemeProvider = ThemeProvider
//# sourceMappingURL=ThemeProvider.js.map
