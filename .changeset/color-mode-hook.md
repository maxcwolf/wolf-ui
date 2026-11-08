---
'@maxcwolf/ui-react-native': patch
---

Theme switching is now `useColorMode()`, which returns `{ mode, setMode, name, names, theme }`.
It replaces `useThemeSwitcher()` (`preference`, `setPreference`). `ThemeProvider`'s props are now
`mode`, `defaultMode` and `onModeChange`, and the `ThemePreference` type is `ColorMode`.
`useTheme()` is unchanged.
