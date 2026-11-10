---
'@maxcwolf/ui-react-native': minor
---

`Button`, `Pressable` and `TextInput` take a `ref` (`ButtonRef`, `PressableRef`, `TextInputRef`),
so a form can move focus with `ref.current?.focus()`.
`Button` can be icon-only: `<Button icon="close" accessibilityLabel="Close" />`. Its props are
now a union, so a button has either a visible label or an `icon` with a required
`accessibilityLabel`.
The built-in screen reader strings can be translated: `loadingLabel` on `Button` (default
"Loading") and `revealLabels={{ show, hide }}` on `TextInput` (default "Show password" /
"Hide password").
