# 0006. Toolchain versions and why some are held back

- Status: accepted
- Date: 2026-11-07

## Context

"Latest" is the goal, but some newest majors do not work together yet.

## Decision

- React Native, React, react-native-web, react-native-svg, Reanimated and friends follow the
  **Expo SDK** (58: React Native 0.88.1, React 19.3.0). They are upgraded together with
  `npx expo install --fix`; Renovate does not bump them one by one.
- **TypeScript 6.0**, not 7: typescript-eslint 8 supports TypeScript `<6.1`.
- **ESLint 9**, not 10: `eslint-plugin-react-native-a11y` (our accessibility lint) supports up to
  ESLint 8 officially and works on 9; it does not load on 10.
- Restyle 2.4.5 is the latest release.

`renovate.json` encodes each hold with an `allowedVersions` rule that cites this ADR.

## Consequences

Revisit when typescript-eslint supports TypeScript 7 and the a11y plugin supports ESLint 10.
