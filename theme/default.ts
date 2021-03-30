import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#0B0B0B',
  white: '#FFFFFF',

  blue: '#43abda',
  blueMedium: '#0d8bc0',
  blueMediumDisabled: '#0d8bc088',
  grayLight: '#e1e3e5',
  grayCoolMedium: '#94abbe',
  grayCoolDark: '#546678',
  redError: '#ea3a46',
  text: '#001833',
}

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: palette.text,
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: palette.text,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: palette.text,
    },
  },
})

export type Theme = typeof theme
