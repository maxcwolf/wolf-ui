import {
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  border,
  position,
  color,
  typography,
  textShadow,
} from '@shopify/restyle'
import { customShadowFunctions } from './customShadow'
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
//# sourceMappingURL=restyleFunctions.js.map
