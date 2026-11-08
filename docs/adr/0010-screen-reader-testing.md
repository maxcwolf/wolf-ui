# 0010. Screen reader testing: a virtual reader on every story, VoiceOver on the main flows

- Status: accepted
- Date: 2026-11-08

## Context

axe and the accessibility contract check that controls have names, roles and states. They do not
check what a screen reader user hears: the order things are read in, whether helper and error text
are read with their field, whether an error that appears is announced, or whether a state is
spoken that should not be. Real screen readers can be scripted (Guidepup drives VoiceOver, NVDA
and Orca), but only on a prepared machine, one test at a time, with wording that changes between
OS releases. On devices, VoiceOver and TalkBack cannot be scripted from CI yet.

## Decision

Two layers, both against the built web Storybook:

1. **Virtual screen reader, every story, every pull request.** `e2e/tests/screen-reader.spec.ts`
   runs Guidepup's Virtual Screen Reader in the page. For each story it reads the page from top to
   bottom and compares the result with a committed transcript in `e2e/__transcripts__/`, and fails
   if a control is announced by role alone. Flow tests drive it by keyboard: Tab to a control,
   activate it, hear the result, including live region announcements. It is deterministic and
   fast, so it runs inside the `e2e` job with the other suites.
2. **Real VoiceOver, the main flows.** `e2e/screen-readers/voiceover.spec.ts` checks the same
   promises with VoiceOver and Safari on a macOS runner (`screen-reader.yml`): on pull requests
   that change components, weekly, and on demand. It matches words rather than whole phrases. It
   is not a required check until it has been stable for a month.

The virtual reader found three gaps on its first run, fixed with it: every Button said "not busy";
on the web a field's helper and error text were not tied to it (React Native Web drops
`accessibilityHint`, so the web build now sets `aria-describedby`); and invalid fields were not
marked invalid (`aria-invalid` on the web).

## Consequences

A change to what a component announces is a reviewed diff, like the public API snapshot. Update
with `yarn e2e:update-transcripts` and read every changed transcript.

The virtual reader is a model, not a screen reader: it reads inside a progressbar or a button
whose children real readers treat as presentational, and it reads a password field's value. The
transcripts record what it says, so those lines are expected. VoiceOver covers the gap for the
main flows. NVDA (Windows) and Orca (Linux) can be added to `screen-readers.config.ts` as
projects once VoiceOver is stable. Device screen readers stay manual until Maestro flows land
(engineering-standards 6.2).
