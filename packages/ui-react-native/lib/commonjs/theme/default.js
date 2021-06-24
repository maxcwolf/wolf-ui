'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.themeDxm = void 0

var _restyle = require('@shopify/restyle')

var _uiTokens = require('@maxcwolf/ui-tokens')

const colors = {
  transparent: 'transparent',
  success: _uiTokens.palette.green,
  successMuted: _uiTokens.palette.greenLight,
  // warn: palette.orange, // TODO
  error: _uiTokens.palette.red,
  link: _uiTokens.palette.blueLight,
  white: _uiTokens.palette.white,
  black: _uiTokens.palette.black,
  primary: _uiTokens.palette.blue,
  primaryMuted: _uiTokens.palette.blueLight,
  secondary: _uiTokens.palette.blueLight,
  text: _uiTokens.palette.black,
  textMuted: _uiTokens.palette.grayDark,
  textMutedLight: _uiTokens.palette.grayLight,
  inputRequired: _uiTokens.palette.red,
  inputBorder: _uiTokens.palette.grayLight,
  inputPlaceholder: _uiTokens.palette.grayDark,
  boxShadow: _uiTokens.palette.black,
}
const spacing = {
  xxs: 3,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 32,
}
const borderRadii = {
  corner: 8,
  icon: 8,
  base: 4,
  tag: 3,
  shadow: 4,
  cardListItem: 10,
  buttonMain: 15,
  buttonInner: 20,
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
  heading: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 38,
    color: 'text',
  },
  subheading: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: 'text',
  },
  body: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.8,
    color: 'text',
  },
  bodyLink: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.8,
    color: 'link',
  },
  bodyError: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.8,
    color: 'error',
  },
  cardTitle: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27.2,
    color: 'text',
  },
  cardBody: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.8,
    color: 'textMuted',
  },
  cardBodyItalic: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 14,
    lineHeight: 19,
    color: 'textMuted',
  },
  formLabel: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 17.7,
    color: 'textMuted',
  },
  formValue: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27.2,
    color: 'text',
  },
  formPlaceholder: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27.2,
    color: 'textMuted',
  },
  buttonTextMain: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    color: 'primary', // todo: account for different button styles later
  },
  buttonTextInner: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: 'primary',
  },
} // Placeholder to placate TS

const zIndices = {
  low: 1,
  tall: 99,
}
const cardVariants = {
  square: {
    borderRadius: 'shadow',
    shadowColor: 'boxShadow',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    bg: 'white',
    width: 155,
    height: 155,
    shadowOpacity: 0.1,
    shadowRadius: borderRadii.shadow,
  },
  listItem: {
    borderRadius: 'cardListItem',
    shadowColor: 'boxShadow',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    bg: 'white',
    width: 315,
    height: 90,
    shadowOpacity: 0.1,
    shadowRadius: borderRadii.shadow,
  },
  stack: {
    bg: 'white',
    shadowOpacity: 0.1,
    width: 380,
    shadowRadius: borderRadii.shadow,
  },
}
const buttonVariants = {
  main: {
    borderRadius: 'buttonMain',
    height: 45,
    width: 315,
    shadowColor: 'boxShadow',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: borderRadii.shadow,
  },
  inner: {
    borderRadius: 'buttonInner',
    borderWidth: 1,
    height: 30,
    paddingHorizontal: 'xxl',
    paddingVertical: 's',
  },
}
const themeDxm = (0, _restyle.createTheme)({
  colors,
  spacing,
  breakpoints,
  borderRadii,
  textVariants,
  cardVariants,
  buttonVariants,
  zIndices,
})
exports.themeDxm = themeDxm
//# sourceMappingURL=default.js.map
