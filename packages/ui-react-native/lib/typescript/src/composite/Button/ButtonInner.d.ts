import { FC } from 'react'
import { PressableProps } from '../../base'
import { TypeProp } from './types'
import { Color } from '../../theme'
export declare type ButtonInnerProps = {
  accessibilityLabel?: string
  children: string
  color: Color
  loading: boolean
  type: TypeProp
} & PressableProps
export declare const ButtonInner: FC<ButtonInnerProps>
