# 0004. Workspace packages export their source under `wolf-ui-source`

- Status: accepted
- Date: 2026-11-07

## Context

Inside the monorepo, the Storybook app, Jest, TypeScript and the linters should read the
library's TypeScript source, so an edit is live without a build. Published consumers must get
compiled JavaScript and declarations. A plain `source` condition is also used by third-party
packages (Metro resolved `whatwg-url-minimum` to a missing file with it).

## Decision

Each package's `exports` maps `wolf-ui-source` to `./src/index.ts`, then `types` and `default` to
`lib/` built by react-native-builder-bob (ESM with `.js` extensions, plus declarations). The
condition is set in `tsconfig.base.json` (`customConditions`), Metro
(`unstable_conditionNames`), Vite (`resolve.conditions`), Jest (`customExportConditions`),
ESLint's import resolver and dependency-cruiser. The name is ours alone, so no other package
resolves differently. **Guards:** `yarn build` and `publint --strict` in `yarn check`.

## Consequences

No build step during development. A new tool that resolves workspace packages must be told the
condition, or it silently reads `lib/` (or fails before a build).
