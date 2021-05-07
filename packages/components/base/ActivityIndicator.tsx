import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'

import { createRestyleComponent, color, ColorProps } from '@shopify/restyle'
import { Theme } from '@wolf-ui/theme'

const restyleFunctions = [color]

export type ActivityIndicatorProps = ColorProps<Theme> &
  RNActivityIndicatorProps

export const ActivityIndicator = createRestyleComponent<
  ActivityIndicatorProps,
  Theme
>(restyleFunctions, RNActivityIndicator)
