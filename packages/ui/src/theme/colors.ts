import { palette } from '@maxcwolf/ui-tokens';

/**
 * The semantic colors every theme defines. Components use only these names, never a palette
 * value or a literal, so swapping the theme recolors everything (lint `wolf/no-raw-color`).
 * Adding a name here makes every theme that lacks it a type error.
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- restyle's createTheme needs an index-signature-compatible type, which an interface is not
export type ThemeColors = {
  /** Page background. */
  background: string;
  /** Cards, inputs and sheets that sit on the background. */
  surface: string;
  /** Recessed or filled surfaces: filled cards, pressed rows. */
  surfaceMuted: string;
  border: string;
  /** Borders that must meet 3:1 against `surface`, such as input outlines (WCAG 1.4.11). */
  borderStrong: string;
  text: string;
  textMuted: string;
  textDisabled: string;
  primary: string;
  primaryPressed: string;
  primarySubtle: string;
  /** Text and icons on `primary`. */
  onPrimary: string;
  danger: string;
  dangerPressed: string;
  dangerSubtle: string;
  onDanger: string;
  success: string;
  warning: string;
  focusRing: string;
  shadow: string;
  transparent: string;
};

export type ColorName = keyof ThemeColors;

export const lightColors: ThemeColors = {
  background: palette.gray50,
  surface: palette.white,
  surfaceMuted: palette.gray100,
  border: palette.gray200,
  borderStrong: palette.gray500,
  text: palette.gray900,
  textMuted: palette.gray600,
  textDisabled: palette.gray400,
  primary: palette.blue600,
  primaryPressed: palette.blue700,
  primarySubtle: palette.blue50,
  onPrimary: palette.white,
  danger: palette.red600,
  dangerPressed: palette.red700,
  dangerSubtle: palette.red50,
  onDanger: palette.white,
  success: palette.green700,
  warning: palette.amber700,
  focusRing: palette.blue500,
  shadow: palette.black,
  transparent: 'transparent',
};

export const darkColors: ThemeColors = {
  background: palette.gray900,
  surface: palette.gray800,
  surfaceMuted: palette.gray700,
  border: palette.gray700,
  borderStrong: palette.gray400,
  text: palette.gray50,
  textMuted: palette.gray300,
  textDisabled: palette.gray600,
  primary: palette.blue300,
  primaryPressed: palette.blue200,
  primarySubtle: palette.blue900,
  onPrimary: palette.gray900,
  danger: palette.red300,
  dangerPressed: palette.red200,
  dangerSubtle: palette.red900,
  onDanger: palette.gray900,
  success: palette.green300,
  warning: palette.amber300,
  focusRing: palette.blue300,
  shadow: palette.black,
  transparent: 'transparent',
};
