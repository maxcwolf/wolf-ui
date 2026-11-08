# 0002. The library runs without Expo

- Status: accepted
- Date: 2026-11-07

## Context

wolf-ui must work in bare React Native apps, in Expo apps and on the web through Expo web
(react-native-web). The easiest way to lose bare React Native support is to import one Expo
module "just for this component".

## Decision

`@maxcwolf/ui-react-native` may import only `react`, `react-native`, `@shopify/restyle`,
`react-native-svg` and `@maxcwolf/ui-tokens`; Restyle, React, React Native and react-native-svg
are peer dependencies. Icons are SVG, not icon fonts, so nothing needs native font linking.
**Guards:** dependency-cruiser `ui-dependency-allowlist`; the package's Jest preset is
`@react-native/jest-preset`, not `jest-expo`. `apps/storybook` (Expo SDK 58) bundles the library
for iOS, Android and web in CI with `expo export`, which covers Expo and Expo web.

## Consequences

Anything platform-specific is written against React Native APIs, with `.web.ts`/`.ios.ts` files
where platforms differ. A capability that only an Expo module offers needs an ADR to widen the
allowlist, or belongs in a separate optional package. A real bare React Native build in CI is
still planned (engineering-standards 6.4).
