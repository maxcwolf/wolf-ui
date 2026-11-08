import type { Theme } from './theme';

/** The themes a `ThemeProvider` can switch between. `light` and `dark` back `'system'`. */
export type ThemeSet = { light: Theme; dark: Theme } & Partial<Record<string, Theme>>;

/** `'system'` follows the device; any other value names a theme in the set. */
export type ThemePreference = 'system' | 'light' | 'dark' | (string & {});

export type SystemColorScheme = 'light' | 'dark' | 'unspecified' | null | undefined;

export interface ResolvedTheme {
  name: string;
  theme: Theme;
}

/** Picks the theme for a preference. Pure, so every branch is unit-tested. */
export function resolveTheme(
  themes: ThemeSet,
  preference: ThemePreference,
  system: SystemColorScheme,
): ResolvedTheme {
  const name = preference === 'system' ? (system === 'dark' ? 'dark' : 'light') : preference;
  const theme = themes[name];
  if (!theme) {
    const known = Object.keys(themes).join(', ');
    throw new Error(`Unknown theme "${name}". The ThemeProvider has: ${known}.`);
  }
  return { name, theme };
}
