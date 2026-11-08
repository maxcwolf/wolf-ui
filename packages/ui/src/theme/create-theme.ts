import type { ThemeColors } from './colors';
import { lightTheme, type Theme } from './theme';

type VariantOverrides<T> = { [K in keyof T]?: Partial<T[K]> };

export interface ThemeOverrides {
  colors?: Partial<ThemeColors>;
  spacing?: Partial<Theme['spacing']>;
  borderRadii?: Partial<Theme['borderRadii']>;
  textVariants?: VariantOverrides<Theme['textVariants']>;
  cardVariants?: VariantOverrides<Theme['cardVariants']>;
  /** Shorthand for `textVariants.defaults.fontFamily`: one font for every text variant. */
  fontFamily?: string;
}

function mergeVariants<T extends Record<string, object>>(
  base: T,
  overrides: VariantOverrides<T> = {},
): T {
  const merged = { ...base };
  for (const name of Object.keys(overrides) as (keyof T)[]) {
    merged[name] = { ...base[name], ...overrides[name] };
  }
  return merged;
}

/**
 * Builds a theme from `base` (the light theme by default) with only the values you change.
 * The result has the same shape as every built-in theme, so it drops into `ThemeProvider`:
 *
 * ```ts
 * const brandLight = createWolfTheme({ colors: { primary: '#6D28D9' }, fontFamily: 'Inter' });
 * const brandDark = createWolfTheme({ colors: { primary: '#C4B5FD' } }, darkTheme);
 * <ThemeProvider themes={{ light: brandLight, dark: brandDark }}>
 * ```
 *
 * Check the result with `auditThemeContrast` in a test.
 */
export function createWolfTheme(overrides: ThemeOverrides, base: Theme = lightTheme): Theme {
  const textVariants = mergeVariants(base.textVariants, overrides.textVariants);
  const theme: Theme = {
    ...base,
    colors: { ...base.colors, ...overrides.colors },
    spacing: { ...base.spacing, ...overrides.spacing },
    borderRadii: { ...base.borderRadii, ...overrides.borderRadii },
    textVariants,
    cardVariants: mergeVariants(base.cardVariants, overrides.cardVariants),
  };
  if (overrides.fontFamily !== undefined) {
    theme.textVariants = {
      ...textVariants,
      defaults: { ...textVariants.defaults, fontFamily: overrides.fontFamily },
    };
  }
  return theme;
}
