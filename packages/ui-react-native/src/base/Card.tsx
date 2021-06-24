import { FC, ReactNode } from 'react'
import { View } from 'react-native'
import {
  createRestyleComponent,
  createVariant,
  SpacingProps,
  BorderProps,
  VariantProps,
  LayoutProps,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  SpacingShorthandProps,
} from '@shopify/restyle'
import { cardRestyleFunctions } from '../helpers/restyleFunctions'
import { CustomShadowProps } from '../helpers/customShadow'
import { Theme } from '../theme/default'

export type CardProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  CustomShadowProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, 'cardVariants'> & { children: ReactNode }

export const Card: FC<CardProps> = createRestyleComponent<CardProps, Theme>(
  [...cardRestyleFunctions, createVariant({ themeKey: 'cardVariants' })],
  View
)
