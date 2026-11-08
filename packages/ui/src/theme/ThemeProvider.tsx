import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
// The one place restyle's provider is used; consumers use this ThemeProvider (ADR 0005).
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle';
import { resolveTheme, type ResolvedTheme, type ColorMode, type ThemeSet } from './resolve-theme';
import { darkTheme, lightTheme } from './theme';

const defaultThemes: ThemeSet = { light: lightTheme, dark: darkTheme };

/**
 * The color mode and how to change it. `mode` is what was chosen (`'system'` or a theme name);
 * `name` and `theme` are what is showing now, so `'system'` resolves to `'light'` or `'dark'`.
 */
export interface ColorModeState extends ResolvedTheme {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  /** The registered theme names. `mode` can be any of them, or `'system'`. */
  names: string[];
}

const ColorModeContext = createContext<ColorModeState | null>(null);

export interface ThemeProviderProps {
  children: ReactNode;
  /** The themes to switch between. Defaults to the built-in light and dark themes. */
  themes?: ThemeSet;
  /** Controlled mode. Leave unset to let the provider own it. */
  mode?: ColorMode;
  /** Starting mode when uncontrolled. Defaults to `'system'`. */
  defaultMode?: ColorMode;
  /** Called on every `setMode`; persist the value here if you want it to survive restarts. */
  onModeChange?: (mode: ColorMode) => void;
}

export function ThemeProvider({
  children,
  themes = defaultThemes,
  mode: controlled,
  defaultMode = 'system',
  onModeChange,
}: ThemeProviderProps) {
  const system = useColorScheme();
  const [uncontrolled, setUncontrolled] = useState<ColorMode>(defaultMode);
  const mode = controlled ?? uncontrolled;

  const setMode = useCallback(
    (next: ColorMode) => {
      setUncontrolled(next);
      onModeChange?.(next);
    },
    [onModeChange],
  );

  const value = useMemo<ColorModeState>(
    () => ({
      ...resolveTheme(themes, mode, system),
      mode,
      setMode,
      names: Object.keys(themes),
    }),
    [themes, mode, system, setMode],
  );

  return (
    <ColorModeContext.Provider value={value}>
      <RestyleThemeProvider theme={value.theme}>{children}</RestyleThemeProvider>
    </ColorModeContext.Provider>
  );
}

/**
 * Reads and changes the color mode: `const { mode, setMode } = useColorMode()`. For the theme's
 * tokens, use `useTheme()`; components read tokens and never switch modes.
 */
export function useColorMode(): ColorModeState {
  const state = useContext(ColorModeContext);
  if (!state) {
    throw new Error('useColorMode must be used inside a wolf-ui ThemeProvider.');
  }
  return state;
}
