import React, { forwardRef, ReactNode } from 'react'
import { View, ViewStyle, StyleProp } from 'react-native'
import {
  spacing,
  SpacingProps,
  border,
  BorderProps,
  backgroundColor,
  BackgroundColorProps,
  layout,
  LayoutProps,
  useRestyle,
} from '@shopify/restyle'
import { Theme } from '../theme/default'

const restyleFunctions = [spacing, border, backgroundColor, layout]

type FlexProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> & {
    style?: StyleProp<ViewStyle>
    children?: ReactNode
  }

export const Flex = forwardRef<View, FlexProps>(
  ({ children, ...restProps }, ref) => {
    const props = useRestyle(restyleFunctions, {
      /** Todo: Add Default Props we may want to add i.e.... 
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'nowrap',
      */
      ...restProps,
    })

    return (
      <View ref={ref} {...props}>
        {children}
      </View>
    )
  },
)
