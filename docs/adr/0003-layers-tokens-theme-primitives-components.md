# 0003. Layers: tokens, theme, primitives, components

- Status: accepted
- Date: 2026-11-07

## Context

A component library stays themeable only if no component reaches past the theme to a raw value,
and stays easy to change only if components do not reach into each other.

## Decision

- `packages/tokens`: raw palette, scales and contrast math. No imports at all.
- `src/theme/`: semantic colors (`ThemeColors`), the light and dark themes, `ThemeProvider`,
  `createWolfTheme`, `auditThemeContrast`. Imports tokens only.
- `src/primitives/`: `Box`, `Text`, `Pressable`, the only wrappers of React Native views.
- `src/components/<Name>/`: built from primitives and theme names; another component only through
  its `index.ts`.

**Guards:** dependency-cruiser `tokens-are-pure`, `ui-theme-is-the-base`,
`ui-primitives-below-components`, `ui-components-meet-through-index`; ESLint bans React Native
views in `components/` and literal colors everywhere but tokens (`wolf/no-raw-color`).

## Consequences

Every visual value flows through the theme, so a theme swap reaches every pixel and the contrast
audit sees every pairing. Components cannot share internals; shared logic moves down a layer.
