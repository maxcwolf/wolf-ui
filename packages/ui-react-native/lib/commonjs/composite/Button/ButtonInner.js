'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.ButtonInner = void 0

var _react = _interopRequireDefault(require('react'))

var _Button = require('../../base/Button')

var _base = require('../../base')

var _getColorUtils = require('./getColorUtils')

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

const ButtonInner = ({ children, color = 'primary', loading, type, ...rest }) =>
  /*#__PURE__*/ _react.default.createElement(
    _Button.Button,
    _extends(
      {
        bg: (0, _getColorUtils.getBaseColor)(type, color),
        borderColor: (0, _getColorUtils.getAccentColor)(type, color),
        pointerEvents: loading ? 'none' : 'auto',
        variant: 'inner',
      },
      rest
    ),
    loading
      ? /*#__PURE__*/ _react.default.createElement(_base.ActivityIndicator, {
          color: (0, _getColorUtils.getAccentColor)(type, color),
          flex: 1,
          height: 10,
        })
      : /*#__PURE__*/ _react.default.createElement(
          _base.Text,
          {
            color: (0, _getColorUtils.getAccentColor)(type, color),
            numberOfLines: 1,
            selectable: false,
            variant: 'buttonTextInner',
          },
          children
        )
  )

exports.ButtonInner = ButtonInner
//# sourceMappingURL=ButtonInner.js.map
