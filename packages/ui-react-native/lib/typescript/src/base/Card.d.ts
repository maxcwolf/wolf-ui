import { FC, ReactNode } from 'react'
import {
  SpacingProps,
  BorderProps,
  VariantProps,
  LayoutProps,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  SpacingShorthandProps,
} from '@shopify/restyle'
import { CustomShadowProps } from '../helpers/customShadow'
import { Theme } from '../theme/default'
export declare type CardProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  CustomShadowProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, 'cardVariants'> & {
    children: ReactNode
  }
export declare const Card: FC<CardProps>
