/** Spacing scale in density-independent pixels. Used for padding, margin and gap. */
export const spacing = {
  none: 0,
  '2xs': 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
} as const;

export const radii = {
  none: 0,
  s: 4,
  m: 8,
  l: 12,
  xl: 16,
  full: 9999,
} as const;

export const fontSizes = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
} as const;

/** Line height for each font size, so text of one size always sits on the same rhythm. */
export const lineHeights = {
  xs: 16,
  s: 20,
  m: 24,
  l: 26,
  xl: 28,
  '2xl': 32,
  '3xl': 38,
} as const satisfies Record<keyof typeof fontSizes, number>;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

/** Minimum width, in dp, at which each layout applies. */
export const breakpoints = {
  phone: 0,
  tablet: 768,
  desktop: 1024,
} as const;

/** Minimum touch target edge in dp (WCAG 2.2 2.5.8 asks for 24; platforms recommend 44-48). */
export const minTouchTarget = 44;
