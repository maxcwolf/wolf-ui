import { FC } from 'react'
import { Button as BaseButton, ButtonProps } from '../../base/Button'
import { ButtonMain } from './ButtonMain'
import { ButtonInner } from './ButtonInner'

export * from '../../base/Button'
export * from './ButtonInner'
export * from './ButtonMain'

export type ButtonType = FC<ButtonProps> & {
  Main: typeof ButtonMain
  Inner: typeof ButtonInner
}

export const Button: ButtonType = Object.assign(BaseButton, {
  Main: ButtonMain,
  Inner: ButtonInner,
})
