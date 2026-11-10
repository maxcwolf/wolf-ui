# TextInput: accessibility spec

Pattern: there is no APG pattern for a plain text field; it follows the native `<input>` and the
[APG guidance on labels and descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/).
The password reveal follows the [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
pattern. Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#textinput).

## Role, name and states

| Aspect      | Web (React Native Web output)                                         | iOS / Android (React Native props)                       |
| ----------- | --------------------------------------------------------------------- | -------------------------------------------------------- |
| Role        | native `<input>` (textbox; `type="password"` while hidden)            | native text field                                        |
| Name        | `aria-labelledby` → the visible label; also `aria-label` from `label` | `accessibilityLabel` = `label`                           |
| Description | `aria-describedby` → the error, else the helper text                  | `accessibilityHint` = `errorText`, else `helperText`     |
| Disabled    | `aria-disabled="true"`, `readonly` (not editable), stays focusable    | `editable={false}`, `aria-disabled`                      |
| Invalid     | `aria-invalid="true"` while there is an error                         | the error is the hint; red border                        |
| Secure      | `type="password"` until revealed                                      | `secureTextEntry` until revealed                         |
| Error text  | `role="alert"`, inside an always-mounted `aria-live="polite"` region  | `role="alert"` inside `accessibilityLiveRegion="polite"` |

The reveal button (only when `secure`):

| Aspect   | Web                                          | iOS / Android                      |
| -------- | -------------------------------------------- | ---------------------------------- |
| Role     | `role="button"`                              | `role="button"`                    |
| Name     | `aria-label` from `revealLabels` (see below) | `accessibilityLabel`, same strings |
| Disabled | follows the field's `disabled`               | same                               |
| Icon     | eye / eye-off, `aria-hidden`                 | hidden from the accessibility tree |

`label` is required, so a field cannot be unnamed (WCAG 1.3.1, 3.3.2). The reveal button's names
default to "Show password" / "Hide password"; pass `revealLabels={{ show, hide }}` with translated
strings in other languages.

## Keyboard

| Key                    | Behaviour                                                                |
| ---------------------- | ------------------------------------------------------------------------ |
| Tab                    | Focuses the field, then the reveal button when `secure`.                 |
| Shift + Tab            | Moves back through the same order.                                       |
| Characters, editing    | Native text editing. Nothing when disabled (read only).                  |
| Enter (field)          | Native: `onSubmitEditing`. No default action on the web.                 |
| Enter / Space (reveal) | Toggles between showing and hiding the value; focus stays on the button. |

`e2e/tests/keyboard.spec.ts` checks that the password can be revealed and hidden by keyboard.

## Focus

- The field shows focus by thickening its border from 1px to 2px and colouring it `primary`
  (`fieldBorderColor`), on every focus, mouse or keyboard, as native inputs do. An invalid field
  keeps its `danger` border while focused, so only the width changes.
- The reveal button uses the `Pressable` focus ring on keyboard focus only.
- `ref` is the native input, so a form can call `ref.current?.focus()` to move focus to the next
  field or to the first invalid one after a failed submit.
- Revealing the password does not move focus. A new error does not move focus; it is announced
  through the live region instead.
- A disabled field is still reachable by Tab on the web (it is read only), so its value can be
  read and copied.

## Expected announcements

| State                   | Must hear                                                               |
| ----------------------- | ----------------------------------------------------------------------- |
| Empty, with placeholder | "Email", text field (edit / edit text), the placeholder                 |
| With helper text        | "Email", text field, then "We never share your email."                  |
| Disabled                | "Email", text field, the value, dimmed / disabled / unavailable         |
| With error              | "Email", text field, the value, "Enter a valid email address.", invalid |
| Error appears           | "Enter a valid email address." announced once, without moving focus     |
| Password                | "Password", secure text field; the value is not read aloud              |
| Reveal button           | "Show password, button"; after activating, "Hide password, button"      |

Per reader: VoiceOver says "text field" and "dimmed"; TalkBack says "edit box" and "disabled";
NVDA says "edit" and "unavailable", and "invalid entry" for `aria-invalid`. The virtual reader's
web transcripts are `e2e/__transcripts__/components-textinput--*.txt`.

## Known issues

- **iOS and Android have no invalid state.** The error reaches them only as the hint and, on
  Android, the live region. iOS ignores live regions, so an error that appears while the field is
  focused is not announced on iOS; it needs `AccessibilityInfo.announceForAccessibility`.
- **The error is an alert inside a polite live region.** The region is always mounted, because
  VoiceOver in Safari skips a live region that arrives with its text (found by the VoiceOver
  suite). `role="alert"` implies `aria-live="assertive"`, so a reader may still announce it
  assertively. Some readers announce an error twice (alert plus hint) when
  it appears on a focused field. Needs manual testing.
- **The label is announced twice by some web readers.** The visible label is a separate text node
  and also the field's name, so browse mode reads "Email" and then "Email, edit". This matches
  native inputs with a `<label>` and is expected.
- **Focus on an invalid field is shown by border width alone.** The border stays `danger` and
  goes from 1px to 2px. Both colours pass 3:1, but a 1px width change may be too subtle for WCAG
  2.4.13 (AAA, not a target) and is worth checking by eye in the manual pass.
- **Placeholder colour.** The placeholder uses `textMuted`; WCAG does not require placeholder
  contrast, but it passes the contrast audit anyway. Do not use a placeholder as the only
  instruction.
- **The reveal button's state is in its name.** It changes name ("Show" ↔ "Hide") instead of
  using `aria-pressed`. APG accepts this for a toggle whose label changes; it means readers do not
  say "toggle button".
