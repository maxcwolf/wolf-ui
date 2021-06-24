import { FC } from 'react'
import { ButtonProps } from '../../base/Button'
import { ButtonMain } from './ButtonMain'
import { ButtonInner } from './ButtonInner'
export * from '../../base/Button'
export * from './ButtonInner'
export * from './ButtonMain'
export declare type ButtonType = FC<ButtonProps> & {
  Main: typeof ButtonMain
  Inner: typeof ButtonInner
}
export declare const Button: ButtonType
