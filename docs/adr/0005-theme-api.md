# 0005. Theme API: semantic colors, named themes, switching in the provider

- Status: accepted (amended 2026-11-08: the switcher is `useColorMode` with `mode`/`setMode`)
- Date: 2026-11-07

## Context

Swapping themes must be effortless for apps (light, dark, brand, high contrast, user choice) and
impossible for a component to opt out of.

## Decision

- Components use semantic color names from one `ThemeColors` type; every theme defines all of
  them (a missing one is a type error).
- `ThemeProvider` takes any number of named themes (`themes={{ light, dark, ...rest }}`) and a
  color mode (`'system'` or a theme name), controlled (`mode`) or uncontrolled (`defaultMode`);
  `useColorMode()` reads and changes it at runtime. `'system'` follows `useColorScheme()`.
- Switching is a separate hook from `useTheme()`, as in MUI (`useColorScheme`) and Chakra
  (`useColorMode`). `useTheme()` returns only the theme's tokens, which is all components need, so
  a component cannot change the app's theme and the theme object stays the plain `Theme` type.
- `createWolfTheme(overrides, base)` builds a theme from partial overrides with the same type.
- `auditThemeContrast(theme)` checks a theme against every pairing the components render, and is
  public so apps can test their own themes.
- Restyle's own `ThemeProvider` and `useTheme` are used only inside `src/theme/`; everything else
  uses the wrappers, which are typed and switch-aware. `Text` requires `variant` and has no
  `fontSize`/`fontWeight`/`fontFamily` props.

**Guards:** the `ThemeColors` type, `theme.test.ts` (both themes pass the audit and have the same
shape), ESLint `no-restricted-imports` (Restyle's hooks outside `src/theme/`, `useColorMode` in
components and primitives) and `wolf/no-raw-color`, `TextProps`.

## Consequences

Theme state lives in one place. Persisting the user's choice is the app's job
(`onModeChange`), so the library needs no storage dependency.
