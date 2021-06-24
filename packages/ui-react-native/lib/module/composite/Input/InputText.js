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

import React, { forwardRef, useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Box, Flex, Text, TextInput } from '../../base'
import { Icon } from '..'
import { HAIRLINE_WIDTH } from '../../helpers/constants'

const InputRequired = () =>
  /*#__PURE__*/ React.createElement(
    Text,
    {
      color: 'inputRequired',
      pt: 's',
    },
    '*',
    ' '
  )

export const InputText = /*#__PURE__*/ forwardRef(
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
    const theme = useTheme()
    const [inputValue, setInputValue] = useState(value)
    const [isEyeOpen, setIsEyeOpen] = useState(isPassword)
    useEffect(() => {
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
      /*#__PURE__*/ React.createElement(
        Flex,
        {
          flexDirection: 'row',
          marginHorizontal: 's',
        },
        isRequired && /*#__PURE__*/ React.createElement(InputRequired, null),
        typeof label === 'string'
          ? /*#__PURE__*/ React.createElement(
              Text,
              {
                variant: 'formLabel',
              },
              label
            )
          : label
      )

    return /*#__PURE__*/ React.createElement(
      Flex,
      {
        alignItems: 'center',
        borderBottomWidth: HAIRLINE_WIDTH,
        borderColor: 'inputBorder',
        borderRadius: 'base',
        flexDirection: 'row',
      },
      label && /*#__PURE__*/ React.createElement(Label, null),
      /*#__PURE__*/ React.createElement(
        Flex,
        {
          flex: 1,
          flexDirection: 'row',
        },
        /*#__PURE__*/ React.createElement(
          Box,
          {
            flexGrow: 1,
          },
          /*#__PURE__*/ React.createElement(
            TextInput,
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
          /*#__PURE__*/ React.createElement(
            TouchableOpacity,
            {
              activeOpacity: 0.8,
              style: {
                marginRight: theme.spacing.m,
              },
              onPress: () => setIsEyeOpen(!isEyeOpen),
            },
            /*#__PURE__*/ React.createElement(Icon, {
              color: theme.colors.text,
              name: isEyeOpen ? 'eye-with-line' : 'eye',
              type: 'entypo',
            })
          )
      ),
      bottomContent &&
        /*#__PURE__*/ React.createElement(
          Box,
          {
            marginRight: 'm',
          },
          typeof bottomContent === 'string'
            ? /*#__PURE__*/ React.createElement(Text, null, bottomContent)
            : bottomContent
        )
    )
  }
)
//# sourceMappingURL=InputText.js.map
