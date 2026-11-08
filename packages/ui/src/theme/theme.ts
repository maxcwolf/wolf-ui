import { createTheme } from '@shopify/restyle';
import {
  breakpoints,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  spacing,
} from '@maxcwolf/ui-tokens';
import { darkColors, lightColors, type ColorName } from './colors';

/** Widens `as const` token literals to numbers, so a theme may override any value. */
const scale = <T extends Record<string, number>>(values: T): Record<keyof T, number> => ({
  ...values,
});

/** One text variant. Wide types, so `createWolfTheme` can set any size, weight or family. */
export interface TextVariantStyle {
  fontSize: number;
  lineHeight: number;
  fontWeight: (typeof fontWeights)[keyof typeof fontWeights];
  color: ColorName;
  fontFamily?: string;
  letterSpacing?: number;
}

const text = (
  size: keyof typeof fontSizes,
  weight: keyof typeof fontWeights,
  color: ColorName = 'text',
): TextVariantStyle => ({
  fontSize: fontSizes[size],
  lineHeight: lineHeights[size],
  fontWeight: fontWeights[weight],
  color,
});

export const lightTheme = createTheme({
  colors: lightColors,
  spacing: scale(spacing),
  borderRadii: scale(radii),
  breakpoints: scale(breakpoints),
  zIndices: { base: 0, raised: 10, overlay: 100, modal: 1000 },
  textVariants: {
    defaults: text('m', 'regular'),
    heading1: text('3xl', 'bold'),
    heading2: text('2xl', 'bold'),
    heading3: text('xl', 'semibold'),
    body: text('m', 'regular'),
    bodyStrong: text('m', 'semibold'),
    label: text('s', 'medium'),
    caption: text('xs', 'regular', 'textMuted'),
    button: text('m', 'semibold'),
  },
  cardVariants: {
    defaults: { backgroundColor: 'surface', borderRadius: 'l', padding: 'l' },
    elevated: {
      shadowColor: 'shadow',
      shadowOpacity: 0.12,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 3,
    },
    outlined: { borderWidth: 1, borderColor: 'border' },
    filled: { backgroundColor: 'surfaceMuted' },
  },
});

/** The shape every theme has. Build your own with `createWolfTheme`. */
export type Theme = typeof lightTheme;

export const darkTheme: Theme = { ...lightTheme, colors: darkColors };

export type TextVariant = Exclude<keyof Theme['textVariants'], 'defaults'>;
export type CardVariant = Exclude<keyof Theme['cardVariants'], 'defaults'>;
export type Spacing = keyof Theme['spacing'];
export type Radius = keyof Theme['borderRadii'];
