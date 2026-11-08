# Assistive technology testing

Automation proves that every story has names, roles, states, contrast, touch targets and
keyboard access ([accessibility.md](accessibility.md)). It cannot prove that a person using a
screen reader understands a component and can use it. That needs a person with the real
assistive technology (AT). This page says which AT wolf-ui supports, when a manual test is
required, how to run one, and what each component got last time.

What a component should do is written in its spec, `accessibility.md` beside the component:

| Component | Spec                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| Button    | [components/Button/accessibility.md](../packages/ui/src/components/Button/accessibility.md)       |
| Card      | [components/Card/accessibility.md](../packages/ui/src/components/Card/accessibility.md)           |
| Icon      | [components/Icon/accessibility.md](../packages/ui/src/components/Icon/accessibility.md)           |
| Spinner   | [components/Spinner/accessibility.md](../packages/ui/src/components/Spinner/accessibility.md)     |
| Stack     | [components/Stack/accessibility.md](../packages/ui/src/components/Stack/accessibility.md)         |
| TextInput | [components/TextInput/accessibility.md](../packages/ui/src/components/TextInput/accessibility.md) |

`src/__contracts__/component-structure.test.ts` fails if a component folder has no spec, and
`yarn new:component` writes a stub.

## Supported matrix

| ID     | Assistive technology | Browser or runtime                             | Platform         | What it covers                                         |
| ------ | -------------------- | ---------------------------------------------- | ---------------- | ------------------------------------------------------ |
| VO-mac | VoiceOver            | Safari, web Storybook                          | macOS (latest)   | the web build with Apple's reader                      |
| VO-iOS | VoiceOver            | on-device Storybook (Expo)                     | iOS (latest)     | the native iOS build                                   |
| TB     | TalkBack             | Chrome, web Storybook, and on-device Storybook | Android (latest) | the native Android build, and the web build on Android |
| NVDA   | NVDA                 | Chrome or Firefox, web Storybook               | Windows 11       | the web build with the most used desktop reader        |
| KB     | Keyboard only        | Chrome, Safari or Firefox                      | any desktop      | Tab order, activation keys, focus visibility           |

"Latest" means the current major release when the test is run; record the exact version in the
results. JAWS, Narrator, Orca, Switch Control, Voice Control and magnifiers are not in the matrix
yet. Issues reported with them are still accepted.

## When a manual test is required

A pull request needs a manual AT pass, on every row of the matrix, when it:

1. **adds a component**, or
2. **changes a component's role, name source, states, keyboard handling or announcements**: for
   example a new `aria-*` or `accessibility*` prop, a live region, a changed label, a new key,
   a change to what is focusable, or a changed transcript in `e2e/__transcripts__/`.

Changes to colours, spacing or layout only, or to tests and docs only, do not need one. If in
doubt, test. The pull request template has a checkbox for it. The author runs the test, or asks
for help in the pull request when they do not have a device; a pull request that needs a test is
not merged until the results are recorded.

A full pass of the matrix on every component is also due before each major release.

## How to test

1. Build the branch: `yarn storybook:web` for the web rows, `yarn storybook:ios` or
   `yarn storybook:android` for the device rows.
2. Open the component's spec and go through each story.
3. For each row of the matrix, check:
   - every item in the spec's "Expected announcements" is heard, with nothing extra (no "not
     busy", no unnamed "button" or "image");
   - every key in the spec's "Keyboard" table does what it says (a keyboard or switch on
     devices: VoiceOver and TalkBack gestures for the reader rows);
   - focus is visible and goes where the spec says;
   - with the largest text size, the component still reads and works.
4. Record one row per AT in the component's table below: the AT and its version, the browser or OS
   version in notes, the date (YYYY-MM-DD), and the result.
5. If anything differs from the spec, record it as **Fail** or **Partial**, open an issue, and
   either fix the component or, if the behaviour is acceptable, add it to the spec's known issues.

Results: **Pass** (as specified), **Partial** (usable, with a difference noted), **Fail** (a
user of that AT cannot understand or use it), **Not yet tested**. Replace a component's row for an
AT when it is retested; git keeps the history.

## Results

### Button

| AT     | Version | Date | Result         | Notes |
| ------ | ------- | ---- | -------------- | ----- |
| VO-mac | -       | -    | Not yet tested |       |
| VO-iOS | -       | -    | Not yet tested |       |
| TB     | -       | -    | Not yet tested |       |
| NVDA   | -       | -    | Not yet tested |       |
| KB     | -       | -    | Not yet tested |       |

### Card

| AT     | Version | Date | Result         | Notes |
| ------ | ------- | ---- | -------------- | ----- |
| VO-mac | -       | -    | Not yet tested |       |
| VO-iOS | -       | -    | Not yet tested |       |
| TB     | -       | -    | Not yet tested |       |
| NVDA   | -       | -    | Not yet tested |       |
| KB     | -       | -    | Not yet tested |       |

### Icon

| AT     | Version | Date | Result         | Notes |
| ------ | ------- | ---- | -------------- | ----- |
| VO-mac | -       | -    | Not yet tested |       |
| VO-iOS | -       | -    | Not yet tested |       |
| TB     | -       | -    | Not yet tested |       |
| NVDA   | -       | -    | Not yet tested |       |
| KB     | -       | -    | Not yet tested |       |

### Spinner

| AT     | Version | Date | Result         | Notes |
| ------ | ------- | ---- | -------------- | ----- |
| VO-mac | -       | -    | Not yet tested |       |
| VO-iOS | -       | -    | Not yet tested |       |
| TB     | -       | -    | Not yet tested |       |
| NVDA   | -       | -    | Not yet tested |       |
| KB     | -       | -    | Not yet tested |       |

### Stack

| AT     | Version | Date | Result         | Notes |
| ------ | ------- | ---- | -------------- | ----- |
| VO-mac | -       | -    | Not yet tested |       |
| VO-iOS | -       | -    | Not yet tested |       |
| TB     | -       | -    | Not yet tested |       |
| NVDA   | -       | -    | Not yet tested |       |
| KB     | -       | -    | Not yet tested |       |

### TextInput

| AT     | Version | Date | Result         | Notes |
| ------ | ------- | ---- | -------------- | ----- |
| VO-mac | -       | -    | Not yet tested |       |
| VO-iOS | -       | -    | Not yet tested |       |
| TB     | -       | -    | Not yet tested |       |
| NVDA   | -       | -    | Not yet tested |       |
| KB     | -       | -    | Not yet tested |       |

## Adding a component

`yarn new:component` writes the spec stub. Before the component's pull request is merged, fill
in the spec, add a section here with a "Not yet tested" row per AT, and run the manual pass.
