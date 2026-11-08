/**
 * Raw color ramps. Components never use these directly: they use the semantic colors of a
 * theme (`@maxcwolf/ui-react-native`), which map onto these. Step 50 is the lightest.
 */
export const palette = {
  white: '#FFFFFF',
  black: '#000000',

  gray50: '#F8F9FB',
  gray100: '#EEF0F4',
  gray200: '#DDE1E8',
  gray300: '#C2C8D2',
  gray400: '#9AA2B1',
  gray500: '#6E7788',
  gray600: '#525A6A',
  gray700: '#3B4250',
  gray800: '#252A34',
  gray900: '#14171D',

  blue50: '#EEF4FF',
  blue100: '#D9E6FF',
  blue200: '#B4CCFF',
  blue300: '#86ABFF',
  blue400: '#5885F7',
  blue500: '#3563E9',
  blue600: '#234BC9',
  blue700: '#1C3BA0',
  blue800: '#172F7A',
  blue900: '#111F4F',

  red50: '#FFF1F1',
  red100: '#FFDEDE',
  red200: '#FFBDBD',
  red300: '#FF8F8F',
  red400: '#F65A5A',
  red500: '#E03131',
  red600: '#BC1F24',
  red700: '#951A1E',
  red800: '#6F1518',
  red900: '#470D0F',

  green50: '#EDFBF2',
  green100: '#D3F5E0',
  green200: '#A6EAC2',
  green300: '#6DD79C',
  green400: '#37BC74',
  green500: '#1F9D5A',
  green600: '#167D48',
  green700: '#13623A',
  green800: '#0F4A2C',
  green900: '#09301D',

  amber50: '#FFF8EB',
  amber100: '#FFEDC7',
  amber200: '#FFD98A',
  amber300: '#FFC04D',
  amber400: '#F5A524',
  amber500: '#D9860B',
  amber600: '#B06606',
  amber700: '#874C09',
  amber800: '#62380B',
  amber900: '#3D2308',
} as const;

export type PaletteColor = keyof typeof palette;
