import { FC } from 'react'
import { ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native'
import { LayoutProps } from '@shopify/restyle'
import { Color, Theme } from '../theme'
interface ActivityIndicatorNativeAndColorProps extends Omit<RNActivityIndicatorProps, 'color'> {
  color?: Color
}
declare type ActivityIndicatorProps = ActivityIndicatorNativeAndColorProps & LayoutProps<Theme>
export declare const ActivityIndicator: FC<ActivityIndicatorProps>
export {}
