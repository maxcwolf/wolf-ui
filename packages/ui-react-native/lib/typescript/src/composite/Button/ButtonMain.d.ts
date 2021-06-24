import { FC } from 'react'
import { PressableProps } from '../../base'
import { ButtonVariants, Color } from '../../theme'
import { IconName } from '../icon'
import { TypeProp } from './types'
export declare type ButtonMainProps = {
  children: string
  color: Color
  icon?: IconName | boolean
  loading: boolean
  type: TypeProp
  variant?: ButtonVariants
} & PressableProps
export declare const ButtonMain: FC<ButtonMainProps>
