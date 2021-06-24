import React, { FC, ReactNode } from 'react'
import { useRestyle } from '@shopify/restyle'
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native'
import { generalRestyleFunctions } from '../helpers/restyleFunctions'
import { BoxProps } from './Box'

export interface TouchableOpacityProps
  extends Partial<Omit<BoxProps, 'children'>>,
    RNTouchableOpacityProps {
  children: ReactNode
}

export const TouchableOpacity: FC<TouchableOpacityProps> = (props): JSX.Element => {
  const restyleProps = useRestyle(generalRestyleFunctions, props)
  return <RNTouchableOpacity {...restyleProps} />
}
