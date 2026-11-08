import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
// The one place restyle's provider is used; consumers use this ThemeProvider (ADR 0005).
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle';
import {
  resolveTheme,
  type ResolvedTheme,
  type ThemePreference,
  type ThemeSet,
} from './resolve-theme';
import { darkTheme, lightTheme } from './theme';

const defaultThemes: ThemeSet = { light: lightTheme, dark: darkTheme };

export interface ThemeSwitcher extends ResolvedTheme {
  /** What the user chose: `'system'` or a theme name. */
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  /** Every theme name the provider can switch to (plus `'system'`). */
  names: string[];
}

const ThemeSwitcherContext = createContext<ThemeSwitcher | null>(null);

export interface ThemeProviderProps {
  children: ReactNode;
  /** The themes to switch between. Defaults to the built-in light and dark themes. */
  themes?: ThemeSet;
  /** Controlled preference. Leave unset to let the provider own it. */
  preference?: ThemePreference;
  /** Starting preference when uncontrolled. Defaults to `'system'`. */
  defaultPreference?: ThemePreference;
  /** Called on every `setPreference`; persist the value here if you want it to survive restarts. */
  onPreferenceChange?: (preference: ThemePreference) => void;
}

export function ThemeProvider({
  children,
  themes = defaultThemes,
  preference: controlled,
  defaultPreference = 'system',
  onPreferenceChange,
}: ThemeProviderProps) {
  const system = useColorScheme();
  const [uncontrolled, setUncontrolled] = useState<ThemePreference>(defaultPreference);
  const preference = controlled ?? uncontrolled;

  const setPreference = useCallback(
    (next: ThemePreference) => {
      setUncontrolled(next);
      onPreferenceChange?.(next);
    },
    [onPreferenceChange],
  );

  const value = useMemo<ThemeSwitcher>(
    () => ({
      ...resolveTheme(themes, preference, system),
      preference,
      setPreference,
      names: Object.keys(themes),
    }),
    [themes, preference, system, setPreference],
  );

  return (
    <ThemeSwitcherContext.Provider value={value}>
      <RestyleThemeProvider theme={value.theme}>{children}</RestyleThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
}

/** Reads and changes the active theme: `const { name, setPreference } = useThemeSwitcher()`. */
export function useThemeSwitcher(): ThemeSwitcher {
  const switcher = useContext(ThemeSwitcherContext);
  if (!switcher) {
    throw new Error('useThemeSwitcher must be used inside a wolf-ui ThemeProvider.');
  }
  return switcher;
}
