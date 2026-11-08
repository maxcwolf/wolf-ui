# Button: accessibility spec

Pattern: [WAI-ARIA APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/). Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#button).

## Role, name and states

| Aspect   | Web (React Native Web output)                                       | iOS / Android (React Native props)                         |
| -------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| Role     | `role="button"` on a `div`                                          | `role="button"`                                            |
| Name     | Text content: the `children` string                                 | The `children` string, read from the label `Text`          |
| Hint     | none (React Native Web drops `accessibilityHint`)                   | `accessibilityHint` when passed                            |
| Disabled | `aria-disabled="true"`, `tabindex="-1"`                             | `aria-disabled`, `disabled` (presses ignored)              |
| Loading  | `aria-busy="true"`, `aria-disabled="true"`; spinner named "Loading" | `aria-busy`, `aria-disabled`; spinner labelled "Loading"   |
| Icons    | `iconStart` / `iconEnd` are `aria-hidden`; they never join the name | `importantForAccessibility="no-hide-descendants"` on icons |

The name comes from a required `children: string`, so a button cannot be unnamed and its visible
label always matches its accessible name (WCAG 2.5.3).

## Keyboard

| Key         | Behaviour                                                        |
| ----------- | ---------------------------------------------------------------- |
| Tab         | Moves focus to the button, in DOM order. Skips it when disabled. |
| Shift + Tab | Moves focus to the previous focusable element.                   |
| Enter       | Calls `onPress`. Nothing when disabled or loading.               |
| Space       | Calls `onPress`. Nothing when disabled or loading.               |

Enter and Space come from React Native Web's press responder for `role="button"`.
`e2e/tests/keyboard.spec.ts` checks Tab and Enter.

## Focus

- A 2px ring in the theme's `focusRing` color, offset 2px, on keyboard focus only (the
  `Pressable` primitive, `:focus-visible` on the web). A mouse click leaves no ring.
- On iOS and Android every focus shows the ring, since focus only moves by keyboard, switch
  control or remote.
- Pressing the button does not move focus.

## Expected announcements

Every reader must say the name, the role and any state. Word order and the state words differ by
reader and version, so manual results record what was really said.

| State    | Must hear                         | VoiceOver (macOS, iOS) | TalkBack                | NVDA                       |
| -------- | --------------------------------- | ---------------------- | ----------------------- | -------------------------- |
| Default  | "Continue", button                | "Continue, button"     | "Continue, button"      | "Continue, button"         |
| Disabled | "Continue", button, disabled      | "... dimmed"           | "... disabled"          | "... unavailable"          |
| Loading  | "Continue", button, busy/disabled | "... dimmed" (+ busy)  | "... disabled" (+ busy) | "... unavailable" (+ busy) |

A reader must not say "not busy", and must not read the icons. The virtual reader's web
transcripts (`e2e/__transcripts__/components-button--*.txt`) read
"button, Continue" and, while loading, "button, Continue, busy, disabled".

## Known issues

- **Disabled buttons leave the Tab order on the web.** React Native Web sets `tabindex="-1"`
  when `disabled`, so keyboard and screen reader users tabbing through a form do not find a
  disabled submit button. APG allows this, but it hides why an action is unavailable. A loading
  button also leaves the Tab order; whether focus survives a focused button switching to loading
  has not been tested.
- **The spinner is a nested `progressbar`.** While loading, a progressbar sits inside the button.
  ARIA treats a button's children as presentational, so real readers should ignore it, but on iOS
  and Android the spinner's "Loading" label may be read before the button's name (shown above as
  expected). Not yet confirmed on devices.
- **No `aria-pressed` or `aria-expanded`.** Button has no toggle or disclosure mode; build those
  as separate components rather than passing raw ARIA props.
- **`accessibilityHint` is native only.** React Native Web drops it, so a hint is not read on the
  web. Do not put information only in the hint.
