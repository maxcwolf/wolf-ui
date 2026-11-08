# AGENTS.md

Instructions for anyone, human or agent, changing this repo. `CLAUDE.md` imports this file. The
rules are enforced by `yarn check` and CI; this page says where things go and why. Background:
[docs/engineering-standards.md](docs/engineering-standards.md) (every rule and its guard),
[docs/accessibility.md](docs/accessibility.md), [docs/theming.md](docs/theming.md),
[docs/adr/](docs/adr/).

## Layer map

```
packages/tokens     @maxcwolf/ui-tokens: palette, scales, contrast math. No dependencies.
packages/ui         @maxcwolf/ui-react-native, in layers (ADR 0003):
  src/theme/          semantic colors, light/dark themes, ThemeProvider, createWolfTheme, contrast audit
  src/primitives/     Box, Text, Pressable: the only wrappers of React Native views
  src/components/     one folder per component, built from primitives and theme names only
apps/storybook      Expo app: on-device Storybook (iOS, Android) and web Storybook (react-native-web)
e2e/                Playwright against the built web Storybook: axe, keyboard, visual
scripts/            yarn new:component and its tests
eslint-rules/       local lint rules (wolf/*) and their tests
```

Dependencies point down: components → primitives → theme → tokens. The library imports only
React, React Native, Restyle, react-native-svg and the tokens, so it runs in bare React Native,
Expo and Expo web (ADR 0002). Nothing imports an app or `e2e/`.

## Where new code goes

- **A new component:** `yarn new:component <Name>`. It writes the component, test, story and
  index in `packages/ui/src/components/<Name>/` and exports it. Then build it from primitives.
- **A new color:** add a semantic name to `ThemeColors` in `src/theme/colors.ts` and give it a
  value in every theme. If components render it on or under another color, add the pairing to
  `contrastRequirements` in `src/theme/contrast-audit.ts`. Never put a literal color in a
  component.
- **A new text style:** a variant in `textVariants` (`src/theme/theme.ts`). `Text` has no
  `fontSize` or `fontWeight` props.
- **Logic in a component** (which color, which size): a pure function in a sibling file
  (`button-styles.ts`) with its own unit test.
- **Platform differences:** a `.web.ts` / `.ios.ts` / `.android.ts` file beside the default one
  (see `primitives/focus-visible.web.ts`), not `Platform.OS` branches spread through a component.
- **A raw React Native view** (`View`, `Text`, `Pressable`, ...): only in `src/primitives/`.

## Rules

- Run `yarn check` before you finish. Work is not done until it exits 0. It runs typecheck, lint,
  format, dependency-cruiser, knip, every test with coverage, the build and publint.
- Accessibility is a requirement, not polish. Every control has an accessible name and role,
  a 44dp touch target, text that scales to 200%, and a visible keyboard focus ring. Both themes
  meet WCAG 2.2 AA contrast. The checks are in [docs/accessibility.md](docs/accessibility.md).
- Every component has a story. Stories are test fixtures: Jest renders each one in both themes
  for the accessibility contract, and Playwright runs axe and screenshots on each one.
- Coverage thresholds in `packages/*/jest.config.cjs` are 100% and only go up.
- Do not weaken a guard file to make a check pass: `eslint.config.mjs`, `eslint-rules/`,
  `.dependency-cruiser.cjs`, `tsconfig.base.json`, `knip.json`, `lefthook.yml`,
  `packages/*/jest.config.cjs`, `e2e/playwright.config.ts`. They are CODEOWNERS-protected. Fix the
  code; if a rule is truly wrong, change it in its own PR with an ADR.
- No `any`, no non-null assertions, no `@ts-ignore`. An `eslint-disable` needs a `--` reason.
- Files ≤ 300 lines, functions ≤ 60 lines, complexity ≤ 10, ≤ 3 parameters.
- Tests import `render` from `src/test-utils/render` (it adds the ThemeProvider), and `await` it:
  React Native Testing Library 14 is async (`no-floating-promises` catches a missing await).
- A user-facing change to a published package needs a changeset (`yarn changeset`).
- After changing the public API, accept the snapshot (`yarn workspace @maxcwolf/ui-react-native
test -u`) so the change is visible in review.
- After adding or removing a story file, run `yarn workspace @maxcwolf/storybook
storybook:generate`.
- After a visual change, update screenshots with `yarn e2e:update-screenshots` (Docker) and
  look at every changed PNG before committing.
- Commits and PR titles are Conventional Commits: `feat:`, `fix:`, `refactor:`, `docs:`,
  `test:`, `chore:`, `perf:`, `ci:`, `build:`, `style:`, `revert:`. PRs are squash-merged.
- Upgrade the React Native stack with `npx expo install --fix` in `apps/storybook`, then match
  the dev versions in `packages/ui/package.json`. Never bump React Native alone.

## Commands

| Command                           | What it does                                                       |
| --------------------------------- | ------------------------------------------------------------------ |
| `yarn check`                      | every guard; must exit 0                                           |
| `yarn test`                       | unit, contract and script tests with coverage                      |
| `yarn new:component <Name>`       | scaffold a component that already meets the contracts              |
| `yarn storybook:web`              | web Storybook on http://localhost:6006                             |
| `yarn storybook:ios` / `:android` | on-device Storybook (builds the Expo dev app)                      |
| `yarn e2e`                        | build web Storybook, run axe, keyboard and smoke tests on the host |
| `yarn e2e:docker`                 | the same plus visual tests, in the pinned Playwright image         |
| `yarn e2e:update-screenshots`     | rewrite visual baselines (Docker)                                  |
