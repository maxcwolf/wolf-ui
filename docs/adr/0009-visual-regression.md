# 0009. Visual regression: Playwright in Docker now, targus on device next

- Status: accepted
- Date: 2026-11-07

## Context

We want to catch unintended visual changes on the web and on devices. Screenshots differ between
machines (fonts, antialiasing), and the on-device tool, targus, is not published yet.

## Decision

Now: `e2e/tests/visual.spec.ts` screenshots every story in both themes at desktop and mobile
widths, only inside the `mcr.microsoft.com/playwright` image whose tag matches
`@playwright/test` (`yarn e2e:docker`, and the CI job's container). Baselines live in
`e2e/__screenshots__/`.

Next: targus captures the on-device Storybook in an iOS simulator and gates PRs with its review
check. `.rnstorybook/index.tsx` already switches to capture mode on `EXPO_PUBLIC_TARGUS=true`
(no Storybook chrome, websocket channel on). Remaining: add `withTargus` from
`@targus/react-native` to `.rnstorybook/preview.tsx`, fix "now" with MockDate for any
date-dependent story, and add the targus workflow.

## Consequences

Web baselines are stable across machines but need Docker to update. Native rendering differences
are not caught until targus lands.
