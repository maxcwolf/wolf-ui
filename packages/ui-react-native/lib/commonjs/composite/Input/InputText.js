'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.InputText = void 0

var _react = _interopRequireWildcard(require('react'))

var _reactNative = require('react-native')

var _restyle = require('@shopify/restyle')

var _base = require('../../base')

var _ = require('..')

var _constants = require('../../helpers/constants')

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null
  var cacheBabelInterop = new WeakMap()
  var cacheNodeInterop = new WeakMap()
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
  })(nodeInterop)
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache(nodeInterop)
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
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

const InputRequired = () =>
  /*#__PURE__*/ _react.default.createElement(
    _base.Text,
    {
      color: 'inputRequired',
      pt: 's',
    },
    '*',
    ' '
  )

const InputText = /*#__PURE__*/ (0, _react.forwardRef)(
  (
    {
      label,
      bottomContent,
      value,
      onChangeText,
      // onClear, TODO: Add onClear usage
      isRequired = false,
      isPassword = false,
      style,
      ...rest
    },
    ref
  ) => {
    const theme = (0, _restyle.useTheme)()
    const [inputValue, setInputValue] = (0, _react.useState)(value)
    const [isEyeOpen, setIsEyeOpen] = (0, _react.useState)(isPassword)
    ;(0, _react.useEffect)(() => {
      setInputValue(value)
    }, [value])

    const handleChange = val => {
      setInputValue(val)
      onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(val)
    } // TODO: remove this and refactor

    const styleTextInput = {
      height: 40, // TODO: Use Theme
    }

    const Label = () =>
      /*#__PURE__*/ _react.default.createElement(
        _base.Flex,
        {
          flexDirection: 'row',
          marginHorizontal: 's',
        },
        isRequired && /*#__PURE__*/ _react.default.createElement(InputRequired, null),
        typeof label === 'string'
          ? /*#__PURE__*/ _react.default.createElement(
              _base.Text,
              {
                variant: 'formLabel',
              },
              label
            )
          : label
      )

    return /*#__PURE__*/ _react.default.createElement(
      _base.Flex,
      {
        alignItems: 'center',
        borderBottomWidth: _constants.HAIRLINE_WIDTH,
        borderColor: 'inputBorder',
        borderRadius: 'base',
        flexDirection: 'row',
      },
      label && /*#__PURE__*/ _react.default.createElement(Label, null),
      /*#__PURE__*/ _react.default.createElement(
        _base.Flex,
        {
          flex: 1,
          flexDirection: 'row',
        },
        /*#__PURE__*/ _react.default.createElement(
          _base.Box,
          {
            flexGrow: 1,
          },
          /*#__PURE__*/ _react.default.createElement(
            _base.TextInput,
            _extends(
              {
                ref: ref,
                pl: 'xs',
              },
              rest,
              {
                placeholderTextColor: theme.colors.inputPlaceholder,
                secureTextEntry: isEyeOpen,
                style: [style, styleTextInput],
                value: inputValue,
                variant: 'formValue',
                onChangeText: handleChange,
              }
            )
          )
        ),
        isPassword &&
          /*#__PURE__*/ _react.default.createElement(
            _reactNative.TouchableOpacity,
            {
              activeOpacity: 0.8,
              style: {
                marginRight: theme.spacing.m,
              },
              onPress: () => setIsEyeOpen(!isEyeOpen),
            },
            /*#__PURE__*/ _react.default.createElement(_.Icon, {
              color: theme.colors.text,
              name: isEyeOpen ? 'eye-with-line' : 'eye',
              type: 'entypo',
            })
          )
      ),
      bottomContent &&
        /*#__PURE__*/ _react.default.createElement(
          _base.Box,
          {
            marginRight: 'm',
          },
          typeof bottomContent === 'string'
            ? /*#__PURE__*/ _react.default.createElement(_base.Text, null, bottomContent)
            : bottomContent
        )
    )
  }
)
exports.InputText = InputText
//# sourceMappingURL=InputText.js.map
