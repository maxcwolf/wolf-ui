import React, { FC } from 'react'
import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native'
import { useTheme, useRestyle, layout, LayoutProps } from '@shopify/restyle'
import { Color, Theme } from '../theme'

interface ActivityIndicatorNativeAndColorProps extends Omit<RNActivityIndicatorProps, 'color'> {
  color?: Color
}

type ActivityIndicatorProps = ActivityIndicatorNativeAndColorProps & LayoutProps<Theme>

const restyleFunctions = [layout]

export const ActivityIndicator: FC<ActivityIndicatorProps> = ({ color = 'text', ...rest }) => {
  const { colors } = useTheme<Theme>()

  const props = useRestyle(restyleFunctions, {
    ...rest,
  })

  return <RNActivityIndicator {...props} color={colors[color]} />
}
