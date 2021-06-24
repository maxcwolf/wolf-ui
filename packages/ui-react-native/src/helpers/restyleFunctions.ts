import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  opacity,
  OpacityProps,
  visible,
  VisibleProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  border,
  BorderProps,
  position,
  PositionProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  textShadow,
  TextShadowProps,
  BaseTheme,
} from '@shopify/restyle'
import { customShadowFunctions, CustomShadowProps } from './customShadow'

export const generalRestyleFunctions = [
  backgroundColor,
  opacity,
  visible,
  layout,
  spacing,
  border,
  position,
  backgroundColorShorthand,
  spacingShorthand,
  color,
  typography,
  customShadowFunctions,
]

export type GeneralRestyleProps<TTheme extends BaseTheme> = BackgroundColorProps<TTheme> &
  BackgroundColorShorthandProps<TTheme> &
  OpacityProps<TTheme> &
  VisibleProps<TTheme> &
  LayoutProps<TTheme> &
  SpacingProps<TTheme> &
  SpacingShorthandProps<TTheme> &
  BorderProps<TTheme> &
  PositionProps<TTheme> &
  ColorProps<TTheme> &
  TypographyProps<TTheme> &
  TextShadowProps<TTheme> &
  CustomShadowProps<TTheme>

export const textRestyleFunctions = [color, opacity, visible, typography, textShadow, spacing]

export const buttonRestyleFunctions = [spacing, border, backgroundColor, customShadowFunctions]

export const cardRestyleFunctions = [
  backgroundColor,
  backgroundColorShorthand,
  border,
  layout,
  spacing,
  spacingShorthand,
  customShadowFunctions,
]
