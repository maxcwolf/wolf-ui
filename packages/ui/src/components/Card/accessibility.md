# Card: accessibility spec

Pattern: no APG pattern. A Card is a visual surface, not a widget or landmark. When a card needs
to be a landmark, the app gives it one (see below). Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#card).

## Role, name and states

| Aspect | Web (React Native Web output)                                     | iOS / Android (React Native props) |
| ------ | ----------------------------------------------------------------- | ---------------------------------- |
| Role   | none: a plain `div`                                               | none: a plain `View`               |
| Name   | none                                                              | none                               |
| States | none                                                              | none                               |
| Props  | any `Box` prop, so `role`, `aria-*` and `accessible` pass through | same                               |

Card's content is read in order as if the card were not there. That is correct for a visual
grouping. Two things are the app's job:

- **Headings.** A title inside a card is only a heading if it is one: pass `role="heading"` (and
  `aria-level` on the web) to the title `Text`. The `heading3` text variant is a size, not a role.
- **Grouping.** To make the card one stop for VoiceOver and TalkBack, pass `accessible` and an
  `accessibilityLabel`; on the web, `role="group"` or `role="region"` with `aria-label`.

## Keyboard

| Key | Behaviour                                                         |
| --- | ----------------------------------------------------------------- |
| Tab | Moves to the focusable children in order. The card is not a stop. |

## Focus

Never takes focus. A pressable card is not supported: wrap the action in a `Button` inside the
card instead, so the card does not become one large control with a long name.

## Expected announcements

| Screen reader | Must hear                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| All           | The children in order, with no extra words for the card: "Weekly summary", "You completed 12 of 14 tasks this week." |

The virtual reader's transcripts (`e2e/__transcripts__/components-card--*.txt`) read exactly those two lines for every variant.

## Known issues

- **The story's title is not a heading.** The stories use `Text variant="heading3"` with no
  heading role, so screen reader users cannot jump to it. The component is correct; the stories
  and docs should show the heading role.
- **Variants are visual only.** `elevated`, `outlined` and `filled` differ in shadow, border and
  background. Nothing about the variant is announced, and nothing should be.
- **Shadow-only edge.** The `elevated` card is separated from the page by its shadow; in forced
  colours mode (Windows High Contrast) shadows are removed and the card edge may disappear. Not
  yet tested.
