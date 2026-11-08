# Spinner: accessibility spec

Pattern: no APG pattern. It uses the ARIA
[`progressbar` role](https://www.w3.org/TR/wai-aria-1.2/#progressbar) for indeterminate progress,
as React Native's `ActivityIndicator` does. Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#spinner).

## Role, name and states

| Aspect | Web (React Native Web output)                                | iOS / Android (React Native props)      |
| ------ | ------------------------------------------------------------ | --------------------------------------- |
| Role   | `role="progressbar"`                                         | `role="progressbar"`                    |
| Name   | `aria-label` = `accessibilityLabel`, default "Loading"       | `accessibilityLabel`, default "Loading" |
| Value  | `aria-valuemin="0"`, `aria-valuemax="1"`, no `aria-valuenow` | none (indeterminate)                    |
| Inside | the animated SVG (see known issues)                          | `accessible`, so it is one element      |

The name has a default, so a spinner is never unnamed. Pass a more specific label ("Loading
results") when there is more than one on screen.

## Keyboard

| Key | Behaviour                           |
| --- | ----------------------------------- |
| -   | None. A spinner is never focusable. |

## Focus

Never takes focus. Showing or hiding a spinner does not move focus.

## Expected announcements

| Screen reader     | Must hear                                           |
| ----------------- | --------------------------------------------------- |
| VoiceOver (macOS) | "Loading, progress indicator" (may add "busy")      |
| VoiceOver (iOS)   | "Loading" (the role word may not be spoken)         |
| TalkBack          | "Loading" (may add "progress bar" or "in progress") |
| NVDA              | "Loading, progress bar" (no percentage)             |

The spinner does not announce itself when it appears: it is not a live region. The virtual
reader's transcripts (`e2e/__transcripts__/components-spinner--*.txt`, added by
maxcwolf/wolf-ui#1) read "progressbar, Loading, max value 1, min value 0".

## Known issues

- **Appearing is silent.** A spinner that appears is only heard when the reading cursor reaches
  it. A screen that loads should also announce the change, for example with
  `AccessibilityInfo.announceForAccessibility` or a live region, or by marking the container
  `aria-busy`. Button does the latter while loading.
- **"max value 1, min value 0".** React Native Web gives the indeterminate progressbar a min and
  max, which some readers speak. An indeterminate progressbar should have neither.
- **The animation is read inside the progressbar.** The virtual reader reads a
  "graphics-document" inside it. Real readers treat a progressbar's children as presentational,
  so this is expected not to be heard; confirm in the manual pass (ADR 0010 in maxcwolf/wolf-ui#1).
- **Reduced motion.** Spinner relies on the platform indicator and does not check the reduced
  motion setting itself. Whether each platform slows or stops it is not yet checked;
  `docs/accessibility.md` requires respecting the setting for components that animate.
