import React, { FC, ReactNode } from 'react'
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { useRestyle } from '@shopify/restyle'
import { generalRestyleFunctions, GeneralRestyleProps } from '../helpers/restyleFunctions'
import { Theme } from '../theme'

export interface PressableProps
  extends Partial<Omit<GeneralRestyleProps<Theme>, 'children' | 'style'>>,
    GeneralRestyleProps<Theme>,
    RNPressableProps {
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}

export const Pressable: FC<GeneralRestyleProps<Theme>> = (props): JSX.Element => {
  const restyleProps = useRestyle(generalRestyleFunctions, props)
  return <RNPressable {...restyleProps} />
}
