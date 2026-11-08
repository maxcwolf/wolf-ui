# Icon: accessibility spec

Pattern: no APG widget pattern; an icon is an image. It follows the
[WAI images tutorial](https://www.w3.org/WAI/tutorials/images/) (decorative vs informative) and
the ARIA `img` role. Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#icon).

## Role, name and states

| Aspect                 | Web (React Native Web output)             | iOS / Android (React Native props)                               |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| Decorative (no label)  | `aria-hidden="true"` on the wrapper `div` | `aria-hidden`, `importantForAccessibility="no-hide-descendants"` |
| Informative (labelled) | `role="img"`, `aria-label` = the label    | `accessible`, `role="img"`, `accessibilityLabel` = the label     |
| States                 | none                                      | none                                                             |

An icon is decorative unless it gets an `accessibilityLabel`, so the safe default is silence. The
contract test fails a story that has `role="img"` without a name (WCAG 1.1.1).

## Keyboard

| Key | Behaviour                                                                  |
| --- | -------------------------------------------------------------------------- |
| -   | None. An icon is never focusable. Put it inside a `Button` to make it act. |

## Focus

Never takes focus. A labelled icon is reachable only with a screen reader's reading cursor
(VoiceOver VO + arrows, TalkBack swipe, NVDA browse mode), not with Tab.

## Expected announcements

| Use                      | Must hear                                                              |
| ------------------------ | ---------------------------------------------------------------------- |
| Decorative               | nothing; the reader skips it                                           |
| Labelled, e.g. "Warning" | "Warning", image (VoiceOver "image", TalkBack "image", NVDA "graphic") |
| Inside a `Button`        | nothing; only the button's text is the name                            |

The virtual reader's transcripts (`e2e/__transcripts__/components-icon--*.txt`): the Default story is empty, Labelled reads "image, Warning", and the All story
reads only the caption under each icon.

## Known issues

- **The SVG itself has no role or title.** The name sits on the wrapper `View`; the inner
  `react-native-svg` `<svg>` has no `role` or `<title>`. Readers use the wrapper, but some
  browser and reader pairs may also expose the SVG as an unnamed graphic. Needs manual testing
  with NVDA.
- **No tooltip or visible text.** A labelled icon's meaning is only available to screen readers
  and to sighted users who recognise the shape. Pair meaningful icons with visible text where you
  can.
- **Windows High Contrast / forced colours.** Icons are drawn with a theme colour as `stroke`, not
  `currentColor`, so in forced-colours mode they may not follow the system colours. Not yet
  tested.
