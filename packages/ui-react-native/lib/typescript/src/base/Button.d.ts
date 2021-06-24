import { FC, ReactNode } from 'react'
import { PressableProps } from 'react-native'
import { VariantProps } from '@shopify/restyle'
import { Theme } from '../theme'
import { GeneralRestyleProps } from '../helpers/restyleFunctions'
export declare type ButtonProps = GeneralRestyleProps<Theme> &
  PressableProps &
  VariantProps<Theme, 'buttonVariants'> & {
    children: ReactNode
  }
export declare const Button: FC<ButtonProps>
