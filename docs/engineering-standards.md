# wolf-ui engineering standards

The rule for this document (ADR 0001): **every standard has a guard.** A standard that lives only
in prose gets broken by the next engineer or agent in a hurry, so each rule below names the file
or command that enforces it. The prose says _why_; the tooling enforces _what_. A rule marked
**Review only** has no automated guard yet and is listed in section 6.

Code comments cite sections 1.2, 1.3, 2, 3.1 and 4.4 by number; keep them stable.

## 1. Architecture

### 1.1 Shape of the repo

```
packages/tokens     pure data and math (palette, scales, contrast)
packages/ui         theme/ -> primitives/ -> components/
apps/storybook      Expo app: on-device and web Storybook
e2e/                Playwright against the built web Storybook
scripts/            generators; eslint-rules/: local lint rules
```

### 1.2 Dependencies point down, and the library has no platform lock-in

| Rule                                                                                                                                                  | Guard                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `packages/tokens` imports nothing outside itself                                                                                                      | `.dependency-cruiser.cjs` `tokens-are-pure`                         |
| The library imports only React, React Native, Restyle, react-native-svg and the tokens, so it runs in bare React Native, Expo and Expo web (ADR 0002) | `ui-dependency-allowlist`                                           |
| `theme/` imports no primitive or component; `primitives/` import no component (ADR 0003)                                                              | `ui-theme-is-the-base`, `ui-primitives-below-components`            |
| A component reaches another only through its `index.ts`                                                                                               | `ui-components-meet-through-index`                                  |
| Only `src/primitives/` wraps React Native views; components use Box, Text, Pressable                                                                  | ESLint `no-restricted-imports` on `packages/ui/src/components/**`   |
| Restyle's `useTheme` and `ThemeProvider` are used only in `src/theme/` (ADR 0005)                                                                     | ESLint `no-restricted-imports`                                      |
| A workspace reaches another only through its package entry                                                                                            | `only-public-package-entry`, plus each package's `exports`          |
| No import cycles                                                                                                                                      | `no-circular` and ESLint `import-x/no-cycle`                        |
| Shipped code imports no test, story or test helper, and no devDependency                                                                              | `no-test-code-in-production`, `not-to-dev-dep`                      |
| Nothing imports an app or `e2e/`                                                                                                                      | `nothing-imports-apps-or-e2e`                                       |
| Every import resolves to a declared dependency                                                                                                        | `not-to-unresolvable`, ESLint `import-x/no-extraneous-dependencies` |
| No unused files, exports or dependencies                                                                                                              | `yarn knip` (`knip.json`)                                           |

The library's Jest preset is `@react-native/jest-preset`, not `jest-expo`, so its tests run with
no Expo code loaded (ADR 0002). `apps/storybook` bundles it with Expo for iOS, Android and web.

### 1.3 Every component has the same shape

`packages/ui/src/components/<Name>/` holds `<Name>.tsx`, `<Name>.test.tsx`, `<Name>.stories.tsx`,
`index.ts` and an `accessibility.md` spec with every section, the stories are titled
`Components/<Name>`, `components/index.ts` exports it, and
`docs/assistive-technology-testing.md` has a results section for it. **Guard:**
`src/__contracts__/component-structure.test.ts`. `yarn new:component` writes all of it but the
results section (4.4).

The package's public API is snapshotted. **Guard:** `src/__contracts__/public-api.test.ts`; an
API change is a snapshot change in the diff.

### 1.4 One entry for source, one for consumers (ADR 0004)

Packages export `wolf-ui-source` → `src/index.ts` for the monorepo (TypeScript, Metro, Vite,
Jest, ESLint and dependency-cruiser all set the condition) and `lib/` for npm. **Guard:**
`yarn build` and `yarn verify:packages` (publint `--strict`) in `yarn check`.

### 1.5 Decisions are recorded

A non-obvious choice is an ADR in `docs/adr/` (template: `0000-template.md`). A change to a rule
in this document adds or supersedes one. **Review only** (PR template).

## 2. Code standards

| Rule                                                                                                                                      | Guard                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| TypeScript `strict` plus `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noImplicitReturns`, `noUnused*` | `tsconfig.base.json`; `yarn typecheck`                                                |
| No `any`, no non-null assertions, no unsafe `any` flow, no unawaited promises                                                             | `typescript-eslint` `strictTypeChecked` (`eslint.config.mjs`)                         |
| Small units: files ≤ 300 lines, functions ≤ 60, complexity ≤ 10, nesting ≤ 3, ≤ 3 parameters                                              | ESLint `max-lines`, `max-lines-per-function`, `complexity`, `max-depth`, `max-params` |
| Every `eslint-disable` names the rule and gives a reason; unused disables fail                                                            | `@eslint-community/eslint-comments`, `reportUnusedDisableDirectives`                  |
| **No literal colors** outside `packages/tokens` and tests; every color is a theme name, so theme swaps reach everything                   | ESLint `wolf/no-raw-color` (`eslint-rules/no-raw-color.mjs`, tested)                  |
| Text sizes, weights and families come only from a variant                                                                                 | `TextProps` omits them and requires `variant` (type error otherwise)                  |
| Every theme defines every semantic color                                                                                                  | `ThemeColors` type; `theme.test.ts` checks both themes have the same shape            |
| Hooks follow the rules of React and of the React Compiler                                                                                 | `eslint-plugin-react-hooks` `recommended-latest`                                      |
| Type-only imports are marked                                                                                                              | `@typescript-eslint/consistent-type-imports`                                          |
| No `console`                                                                                                                              | ESLint `no-console`                                                                   |
| Formatting is not discussed                                                                                                               | Prettier; lefthook `pre-commit` writes staged files; `yarn format:check`              |
| Commits and PR titles are Conventional Commits                                                                                            | commitlint in lefthook `commit-msg`; `pr-title` job in `.github/workflows/check.yml`  |
| No secrets in the tree                                                                                                                    | `gitleaks` job in `.github/workflows/check.yml`                                       |

**Review only:** prefer a plain function to a class; extract on the third real use, not the
first; a component's logic lives in a pure, tested sibling module (`button-styles.ts`).

## 3. Testing

### 3.1 The layers

| Layer                | What it proves                                                                                              | Where                                                     | Runs                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| Unit                 | Pure functions (tokens, style helpers, theme resolution) behave per spec                                    | `*.test.ts` beside the source                             | `yarn test`           |
| Component            | A component renders, responds and announces itself correctly, in both themes                                | `*.test.tsx`, React Native Testing Library                | `yarn test`           |
| Contract             | Structure, public API, theme parity, contrast, and the accessibility contract on every story                | `packages/ui/src/__contracts__/`, `theme/*.test.ts`       | `yarn test`           |
| Tooling              | Lint rules and generators do what they say; the generator's output passes every check                       | `eslint-rules/*.test.mjs`, `scripts/*.test.mjs`           | `yarn test:scripts`   |
| Bundling             | The app bundles for iOS, Android and web under Expo                                                         | `expo export` in `.github/workflows/check.yml`            | CI                    |
| End to end (web)     | Every story renders without console errors and passes axe (WCAG 2.2 AA) in both themes; keyboard flows work | `e2e/tests/stories.spec.ts`, `keyboard.spec.ts`           | `yarn e2e`            |
| Visual (web)         | Every story matches its baseline in both themes, desktop and mobile                                         | `e2e/tests/visual.spec.ts`, `e2e/__screenshots__/`        | `yarn e2e:docker`, CI |
| Screen reader        | Every story reads as its transcript says, no control without a name, live regions announce (ADR 0010)       | `e2e/tests/screen-reader.spec.ts`, `e2e/__transcripts__/` | `yarn e2e`, CI        |
| Screen reader (real) | The main flows with VoiceOver and Safari                                                                    | `e2e/screen-readers/`, `screen-reader.yml`                | CI (macOS)            |
| Visual (native)      | Planned: targus captures on-device Storybook (6.1)                                                          | `apps/storybook/.rnstorybook` (capture switch present)    | not yet               |

Coverage thresholds are 100% for lines, branches, functions and statements in
`packages/tokens/jest.config.cjs` and `packages/ui/jest.config.cjs`. **Guard:** `yarn test`
fails under them; the files are CODEOWNERS-protected. **Review only:** thresholds only go up.

### 3.2 Test hygiene

| Rule                                                                                 | Guard                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| No focused or skipped tests; no conditional `expect`                                 | `eslint-plugin-jest`; Playwright `forbidOnly` in CI                                 |
| Component tests render through `test-utils/render` (fixed theme, never the device's) | ESLint `no-restricted-imports` on RNTL `render`                                     |
| Stories are the shared fixtures: no second set of examples for tests                 | the accessibility contract and e2e suites iterate the stories                       |
| E2E waits for the story's theme before asserting, never a sleep                      | `openStory` in `e2e/tests/stories.ts`                                               |
| E2E retries once in CI, never locally                                                | `retries` in `e2e/playwright.config.ts`                                             |
| Screenshots are taken only in the pinned Playwright image                            | `visual.spec.ts` skips without `VISUAL=1`, which only `run-in-docker.sh` and CI set |

**Review only:** a test asserts behaviour a user or screen reader would notice (roles, names,
text, colors from the theme), not implementation details.

## 4. Guards against drift by engineers and agents

### 4.1 One command, run everywhere

`yarn check` = typecheck, lint, format check, dependency-cruiser, knip, tests with coverage,
build, publint. It runs in `lefthook` `pre-push`, in CI (`.github/workflows/check.yml`) on every
PR and push to `main`, and `AGENTS.md` says work is not done until it exits 0. `pre-commit`
formats and lints staged files; `commit-msg` runs commitlint.

### 4.2 Agent hooks

`.claude/settings.json` runs `scripts/agent-lint-hook.mjs` after every edit an agent makes: the
edited file is linted and the agent is told about any error at once, before it builds on it.

### 4.3 CODEOWNERS and review

`.github/CODEOWNERS` requests the maintainer's review on every guard file. The PR template asks
whether the change touches a guard, adds a dependency or changes the public API. Squash merges
only, so the checked PR title is the commit on `main`. Branch protection that requires the checks
and code-owner review is a repository setting (6.3).

### 4.4 Scaffolding over instructions

`yarn new:component <Name>` (`scripts/new-component.mjs`) writes a component that already meets
1.3, 2 and the accessibility contract. `scripts/new-component.test.mjs` generates one into the
real tree and checks it type-checks, lints and is formatted, then removes it.

### 4.5 AGENTS.md

`AGENTS.md` (imported by `CLAUDE.md`) is the short version of this page. When the two disagree,
the guard files are what runs.

## 5. Toolchain (ADR 0006)

Yarn 4 workspaces (node-modules linker), Node 22, TypeScript 6.0, Expo SDK 58 (React Native
0.88, React 19.3, react-native-web 0.21), Restyle 2.4, react-native-builder-bob, Jest 30 with
React Native Testing Library 14, Storybook 10 (React Native and react-native-web-vite),
Playwright with axe-core, ESLint 9 flat config, Prettier, dependency-cruiser, knip, lefthook,
commitlint, Changesets, Renovate.

## 6. Planned (not guards yet)

1. **targus on-device visual review** (ADR 0009): capture every story on an iOS simulator in CI
   with `@targus/react-native`'s `withTargus` decorator. The capture switch
   (`EXPO_PUBLIC_TARGUS`) is already in `.rnstorybook/index.tsx`. Blocked on targus packages being
   published.
2. **Native end to end**: Maestro flows (VoiceOver/TalkBack labels, Dynamic Type at the largest
   size) against the on-device Storybook. NVDA and Orca projects beside VoiceOver in
   `e2e/screen-readers.config.ts` (ADR 0010).
3. **Branch protection on `main`**: require `check`, `e2e`, `gitleaks`, `pr-title`, one approval
   and code-owner review, admins included.
4. **A bare React Native example app** (`apps/bare`) built in CI, to prove the no-Expo path with a
   real native build rather than by the dependency allowlist alone.
5. **Mutation testing** (Stryker) on `packages/tokens` and the style helpers, nightly.
6. **Changeset check** on PRs that touch a published package.
