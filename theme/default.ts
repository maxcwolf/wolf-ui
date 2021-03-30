/**
 * @description Default Theme Spec
 *
 * @todo This folder should be converted to a package when this Repo is changed to a
 *  Lerna monorepo.
 */
import { createTheme } from '@shopify/restyle'
import { palette } from '../tokens/default'

const colors = {
  mainBackground: palette.white,
  text: palette.text,
}

const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
  xxl: 64,
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

export const theme = createTheme({
  colors,
  spacing,
  breakpoints,
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: colors.text,
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: colors.text,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text,
    },
  },
})

export type Theme = typeof theme
