import { createTheme } from '@shopify/restyle'
import { palette } from '../tokens/default'

const colors = {
  transparent: 'transparent',
  success: palette.green,
  warn: palette.orange,
  fail: palette.red,
  link: palette.blueMedium,
  white: palette.white,
  black: palette.black,
  primary: palette.blue,
  secondary: palette.blueLight,
  text: palette.dark,
  inputRequired: palette.red,
  inputBorder: palette.grayLight,
  inputPlaceholder: palette.darkMedium,
}

const spacing = {
  xxs: 3,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 24,
}

const borderRadii = {
  corner: 8,
  icon: 8,
  base: 4,
  tag: 3,
}

const breakpoints = {
  phone: 0,
  longPhone: {
    width: 0,
    height: 812,
  },
  tablet: 768,
  largeTablet: 1024,
}

const textVariants = {
  normal: {
    fontSize: 16,
    color: 'text',
  },
}

export const theme = createTheme({
  colors,
  spacing,
  breakpoints,
  borderRadii,
  textVariants,
})

export type Theme = typeof theme
export type Spacing = keyof Theme['spacing']

export const darkTheme: Theme = {
  ...theme,
  /** TODO: Add custom colors to override the normal theme's */
}
