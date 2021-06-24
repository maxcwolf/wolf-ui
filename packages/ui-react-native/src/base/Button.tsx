import React, { FC, ReactNode } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'
import { Theme } from '../theme'
import { generalRestyleFunctions, GeneralRestyleProps } from '../helpers/restyleFunctions'

export type ButtonProps = GeneralRestyleProps<Theme> &
  PressableProps &
  VariantProps<Theme, 'buttonVariants'> & { children: ReactNode }

export const Button: FC<ButtonProps> = createRestyleComponent<ButtonProps, Theme>(
  [...generalRestyleFunctions, createVariant({ themeKey: 'buttonVariants' })],
  ({ children, ...rest }: ButtonProps) => (
    <Pressable
      accessibilityRole="button"
      alignItems="center"
      android_ripple={null}
      flexDirection="row"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Pressable>
  )
)
