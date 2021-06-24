import { ReactNode } from 'react'
import { createBox, BoxProps as RestyleBoxProps } from '@shopify/restyle'
import { Theme } from '../theme'

export interface BoxProps extends Omit<Partial<RestyleBoxProps<Theme>>, 'children'> {
  children: ReactNode
}
/**
 * @description The Box component comes with the following Restyle functions:
 *  `backgroundColor`, `opacity`, `visible`, `layout`, `spacing`, `border`, `shadow`, `position`.
 */
export const Box = createBox<Theme>()

export const View = Box
