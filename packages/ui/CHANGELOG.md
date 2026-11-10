# @maxcwolf/ui-react-native

## 2.0.0

### Minor Changes

- 8511da0: `Button`, `Pressable` and `TextInput` take a `ref` (`ButtonRef`, `PressableRef`, `TextInputRef`),
  so a form can move focus with `ref.current?.focus()`.
  `Button` can be icon-only: `<Button icon="close" accessibilityLabel="Close" />`. Its props are
  now a union, so a button has either a visible label or an `icon` with a required
  `accessibilityLabel`.
  The built-in screen reader strings can be translated: `loadingLabel` on `Button` (default
  "Loading") and `revealLabels={{ show, hide }}` on `TextInput` (default "Show password" /
  "Hide password").

### Patch Changes

- 8521f2c: Theme switching is now `useColorMode()`, which returns `{ mode, setMode, name, names, theme }`.
  It replaces `useThemeSwitcher()` (`preference`, `setPreference`). `ThemeProvider`'s props are now
  `mode`, `defaultMode` and `onModeChange`, and the `ThemePreference` type is `ColorMode`.
  `useTheme()` is unchanged.
- c4c8cdb: Screen readers hear less noise and more context. `Button` sets `aria-busy` only while loading,
  so it no longer says "not busy". On the web, `TextInput` is described by its helper or error text
  (`aria-describedby`) and is marked `aria-invalid` when it has an error; iOS and Android keep
  reading that text as the accessibility hint.
  `TextInput` errors now appear inside a live region that is always mounted, so VoiceOver in Safari
  announces them when they appear (it skipped the region when it was mounted with the text).
- @maxcwolf/ui-tokens@2.0.0
