'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.ButtonMain = void 0

var _react = _interopRequireDefault(require('react'))

var _base = require('../../base')

var _Button = require('../../base/Button')

var _icon = require('../icon')

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

const ButtonMain = ({
  children,
  color = 'primary',
  icon = true,
  loading,
  type,
  variant = 'main',
  ...rest
}) => {
  return /*#__PURE__*/ _react.default.createElement(
    _Button.Button,
    _extends(
      {
        bg: (0, _getColorUtils.getBaseColor)(type, color),
        justifyContent: 'space-around',
        pointerEvents: loading ? 'none' : 'auto',
        variant: variant,
      },
      rest
    ),
    /*#__PURE__*/ _react.default.createElement(_base.Box, {
      flex: 1,
    }),
    loading
      ? /*#__PURE__*/ _react.default.createElement(_base.ActivityIndicator, {
          color: (0, _getColorUtils.getAccentColor)(type, color),
          flex: 1,
        })
      : /*#__PURE__*/ _react.default.createElement(
          _base.Box,
          {
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'center',
          },
          /*#__PURE__*/ _react.default.createElement(
            _base.Text,
            {
              color: (0, _getColorUtils.getAccentColor)(type, color),
              numberOfLines: 1,
              selectable: false,
              variant: 'buttonTextMain',
            },
            children
          )
        ),
    /*#__PURE__*/ _react.default.createElement(
      _base.Box,
      {
        flex: 1,
      },
      icon &&
        !loading &&
        /*#__PURE__*/ _react.default.createElement(_icon.Icon, {
          isRounded: true,
          bg: (0, _getColorUtils.getAccentColor)(type, color),
          color: (0, _getColorUtils.getBaseColor)(type, color),
          name: typeof icon === 'string' ? icon : 'arrow-right',
          type: 'svg',
        })
    )
  )
}

exports.ButtonMain = ButtonMain
//# sourceMappingURL=ButtonMain.js.map
