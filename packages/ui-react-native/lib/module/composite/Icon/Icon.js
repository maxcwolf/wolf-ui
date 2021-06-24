import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { getIconComponent } from '../../helpers/icon'
import { Flex } from '../../base'

/**
 * @todo Export all possible icon name values and types.
 */
export const Icon = props => {
  const theme = useTheme()
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
  const styles = StyleSheet.create({
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
  const IconComponent = getIconComponent(type)
  return /*#__PURE__*/ React.createElement(
    Flex,
    {
      style: [styles.container, isRounded && styles.rounded, isDisabled && styles.disabled],
    },
    onPress
      ? /*#__PURE__*/ React.createElement(
          TouchableOpacity,
          {
            onPress,
            onLongPress,
            isDisabled,
            style: [styles.touchable, isRounded && styles.rounded],
          },
          /*#__PURE__*/ React.createElement(IconComponent, {
            name,
            size,
            color: theme.colors[color],
          })
        )
      : /*#__PURE__*/ React.createElement(IconComponent, {
          name,
          size,
          color: theme.colors[color],
        })
  )
}
//# sourceMappingURL=Icon.js.map
