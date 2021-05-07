import React from 'react'
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Color, Theme } from '@wolf-ui/theme'

export const ActivityIndicator = ({
  animating,
  color,
  hidesWhenStopped,
  size,
  style,
}: {
  animating?: boolean
  color?: Color
  hidesWhenStopped?: boolean
  size?: number | 'small' | 'large'
  style?: StyleProp<ViewStyle>
}) => {
  const theme = useTheme<Theme>()

  return (
    <RNActivityIndicator
      color={theme.colors[color || 'text']}
      animating={animating}
      hidesWhenStopped={hidesWhenStopped}
      size={size}
      style={style}
    />
  )
}
