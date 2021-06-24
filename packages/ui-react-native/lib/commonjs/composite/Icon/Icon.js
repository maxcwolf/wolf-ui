'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Icon = void 0

var _react = _interopRequireDefault(require('react'))

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

var _icon = require('../../helpers/icon')

var _base = require('../../base')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @todo Export all possible icon name values and types.
 */
const Icon = props => {
  const theme = (0, _restyle.useTheme)()
  const {
    type,
    name,
    size = theme.borderRadii.icon * 2,
    color = theme.colors.black,
    bg = theme.colors.transparent,
    onPress,
    onLongPress,
    isDisabled = false,
    isRounded = false,
    ratio = 1.5,
  } = props

  const styles = _reactNative.StyleSheet.create({
    container: {
      backgroundColor: theme.colors[bg],
      width: size * ratio,
      height: size * ratio,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
      width: size * ratio,
      height: size * ratio,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rounded: {
      borderRadius: (size * ratio) / 2,
    },
    disabled: {
      opacity: 0.3,
    },
  })

  const IconComponent = (0, _icon.getIconComponent)(type)
  return /*#__PURE__*/ _react.default.createElement(
    _base.Flex,
    {
      style: [styles.container, isRounded && styles.rounded, isDisabled && styles.disabled],
    },
    onPress
      ? /*#__PURE__*/ _react.default.createElement(
          _reactNative.TouchableOpacity,
          {
            onPress,
            onLongPress,
            isDisabled,
            style: [styles.touchable, isRounded && styles.rounded],
          },
          /*#__PURE__*/ _react.default.createElement(IconComponent, {
            name,
            size,
            color: theme.colors[color],
          })
        )
      : /*#__PURE__*/ _react.default.createElement(IconComponent, {
          name,
          size,
          color: theme.colors[color],
        })
  )
}

exports.Icon = Icon
//# sourceMappingURL=Icon.js.map
