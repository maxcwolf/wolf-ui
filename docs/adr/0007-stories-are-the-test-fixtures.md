# 0007. Stories are the test fixtures

- Status: accepted
- Date: 2026-11-07

## Context

Examples written separately for docs, unit tests, accessibility checks and screenshots drift
apart, and a new component is easily missed by one of them.

## Decision

Each component's `*.stories.tsx` (CSF3) is the single set of examples. Jest renders every story
in both themes for the accessibility contract, through a small local `composeStories`
(`src/test-utils/stories.tsx`): Storybook 10 is ESM-only and its own `composeStories` does not
load under the React Native Jest preset. Playwright reads the built Storybook's `index.json` and
runs axe, smoke and visual tests on every story. Stories that never settle carry the
`skip-visual` tag. The component-structure contract requires a story for every component.

## Consequences

A new story is covered by every suite with no other change. Stories must be deterministic (no
real dates, randomness or network).
