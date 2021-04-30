import React, { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../../theme/default'
import { getIconComponent, IconType } from '../../helpers/icon'

export interface IconProps {
  name: string
  size?: number
  color?: string
  bgColor?: string
  type?: IconType
  onPress?: () => void
  onLongPress?: () => void
  isDisabled?: boolean
  isRounded?: boolean
  ratio?: number
}

export const Icon: FC<IconProps> = (props) => {
  const theme = useTheme<Theme>()

  const {
    type,
    name,
    size = theme.borderRadii.icon * 2,
    color = theme.colors.black,
    bgColor = theme.colors.transparent,
    onPress,
    onLongPress,
    isDisabled = false,
    isRounded = false,
    ratio = 1.5,
  } = props

  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgColor,
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
  return (
    <View
      style={[
        styles.container,
        isRounded && styles.rounded,
        isDisabled && styles.disabled,
      ]}
    >
      {onPress ? (
        <TouchableOpacity
          {...{
            onPress,
            onLongPress,
            isDisabled,
          }}
          style={[styles.touchable, isRounded && styles.rounded]}
        >
          <IconComponent
            {...{
              name,
              size,
              color,
            }}
          />
        </TouchableOpacity>
      ) : (
        <IconComponent
          {...{
            name,
            size,
            color,
          }}
        />
      )}
    </View>
  )
}
