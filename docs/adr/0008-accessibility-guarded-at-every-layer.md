# 0008. Accessibility is guarded at every layer

- Status: accepted
- Date: 2026-11-07

## Context

WCAG 2.2 AA is a requirement for every component, on native and web. No single tool sees
everything: lint sees source, Jest sees the React Native tree, axe sees the DOM.

## Decision

Types (required labels and variants), lint (`eslint-plugin-react-native-a11y`), the theme
contrast audit, the accessibility contract over every story in Jest, axe over every story on the
web, and keyboard specs, as traced in `docs/accessibility.md`.

Two plugin rules are off: `has-accessibility-hint` (hints are optional on iOS and Android and
forcing them adds noise to screen readers) and `has-valid-accessibility-descriptors` (it cannot
see that a wolf-ui component supplies its own name, e.g. `TextInput`'s `label`). The contract
test checks accessible names on the rendered tree instead, which is more precise.

## Consequences

Screen-reader output and font scaling on real devices are not automated yet
(engineering-standards 6.1, 6.2).
