# Accessibility

wolf-ui targets **WCAG 2.2 level AA** on iOS, Android and the web. Accessibility is part of
"done", not a later pass: every requirement below has a check that fails the build (ADR 0008).
Checks that cannot run without a device are listed at the end with their planned guard.

What each component should do for a screen reader or keyboard user is written in its spec,
`accessibility.md` beside the component (role, name and states, keyboard, focus, expected
announcements, known issues). What real assistive technology did when a person last tried it is
recorded in [assistive-technology-testing.md](assistive-technology-testing.md), with the
supported matrix and when a manual pass is required.

## How it is checked

1. **Types make the accessible path the only path.** `Button` takes its label as `children:
string`, `TextInput` requires `label`, `Text` requires a `variant`, an `Icon` is decorative
   unless given an `accessibilityLabel`.
2. **Lint** (`eslint.config.mjs`): every `eslint-plugin-react-native-a11y` rule is an error,
   except `has-accessibility-hint` and `has-valid-accessibility-descriptors` (ADR 0008).
3. **The contrast audit** (`src/theme/contrast-audit.ts`): `auditThemeContrast(theme)` measures
   every foreground/background pairing the components render. Both built-in themes must return no
   failures (`theme.test.ts`), and it is exported so apps can test their own themes.
4. **The accessibility contract** (`src/__contracts__/accessibility.test.tsx`): Jest renders
   **every story in both themes** and checks names, roles, touch targets and text scaling. A new
   component is covered as soon as it has a story.
5. **axe on the web** (`e2e/tests/stories.spec.ts`): every story, both themes, desktop and mobile
   viewports, with axe-core's WCAG 2.0/2.1/2.2 A and AA rules, and no console errors.
6. **Keyboard flows** (`e2e/tests/keyboard.spec.ts`): tab order, Enter activation, a visible
   focus ring on keyboard focus and none after a mouse click, a password field revealed by
   keyboard alone.
7. **Unit tests** assert roles and names with React Native Testing Library's accessible queries
   (`getByRole('button', { name })`, `toBeDisabled`, `toBeBusy`).

## Traceability

| WCAG 2.2 criterion           | What wolf-ui does                                                                                 | Check                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1.1.1 Non-text content       | Icons are hidden unless labelled; a labelled icon is `role="img"` with a name                     | contract (img has a name), `Icon.test.tsx`, axe                |
| 1.3.1 Info and relationships | Fields have a visible label tied to the input (`accessibilityLabel`, `aria-labelledby`)           | types (`label` required), contract, axe `label`                |
| 1.4.3 Contrast (minimum)     | Every text pairing ≥ 4.5:1 in every theme                                                         | `auditThemeContrast` in `theme.test.ts`, axe `color-contrast`  |
| 1.4.4 Resize text            | Text scales with the system setting up to 200%; button labels wrap instead of truncating          | contract (`allowFontScaling`, `maxFontSizeMultiplier` ≥ 2)     |
| 1.4.11 Non-text contrast     | Input borders and the focus ring ≥ 3:1                                                            | `contrastRequirements` (`borderStrong`, `focusRing`)           |
| 2.1.1 Keyboard               | Everything pressable is a focusable button on the web                                             | `keyboard.spec.ts`                                             |
| 2.4.3 Focus order            | DOM order follows visual order; no positive tab indexes                                           | `keyboard.spec.ts`                                             |
| 2.4.7 Focus visible          | A 2px ring in the theme's `focusRing` color on keyboard focus (`Pressable`)                       | `Pressable.test.tsx`, `keyboard.spec.ts`                       |
| 2.5.8 Target size (minimum)  | Every control is at least 44dp tall, including hit slop (stricter than the 24px minimum)          | contract (touch target), `button-styles.test.ts`               |
| 3.3.1 Error identification   | `TextInput` shows `errorText` in place of the helper, as an alert, in the `danger` color + border | `TextInput.test.tsx`                                           |
| 3.3.2 Labels or instructions | Every field has a visible label; helper text is the accessibility hint                            | types, `TextInput.test.tsx`                                    |
| 4.1.2 Name, role, value      | Controls expose role, name and state (`aria-disabled`, `aria-busy`, `secureTextEntry`)            | contract (names), `Button.test.tsx`, `TextInput.test.tsx`, axe |
| 4.1.3 Status messages        | Field errors are a polite live region                                                             | `TextInput.test.tsx`                                           |

## Not yet automated

- **Screen reader output on devices** (VoiceOver, TalkBack): planned as Maestro flows against
  on-device Storybook (engineering-standards 6.2). Until then, check new components by hand
  with the matrix and process in [assistive-technology-testing.md](assistive-technology-testing.md).
- **Largest Dynamic Type / font scale on devices**: the contract checks that text may scale;
  whether layouts survive it on a device is covered by targus captures once they land (6.1).
- **Reduced motion**: no component animates yet. The first one that does must respect
  `AccessibilityInfo.isReduceMotionEnabled()` and add a check here.

## Checklist for a new component

- [ ] Its `accessibility.md` is filled in from the matching APG pattern, with every gap under
      known issues (`src/__contracts__/component-structure.test.ts` checks it exists).
- [ ] It has a results section in [assistive-technology-testing.md](assistive-technology-testing.md)
      and has had a manual pass on every row of the matrix.
- [ ] It has a role and an accessible name, from a required prop where possible.
- [ ] It is reachable and operable by keyboard on the web.
- [ ] Every interactive part is at least 44dp tall (use `minTouchTarget` and `hitSlop`).
- [ ] Every color is a theme name; new pairings are in `contrastRequirements`.
- [ ] Text uses a variant and is allowed to scale.
- [ ] Stories cover its states (disabled, error, loading), so the contract and axe see them.
