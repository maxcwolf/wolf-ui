# Stack: accessibility spec

Pattern: no APG pattern. Stack is layout only: a `Box` with a flex direction and a theme gap.
Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#stack).

## Role, name and states

| Aspect | Web (React Native Web output)                    | iOS / Android (React Native props) |
| ------ | ------------------------------------------------ | ---------------------------------- |
| Role   | none: a plain `div` with `display: flex`         | none: a plain `View`               |
| Name   | none                                             | none                               |
| States | none                                             | none                               |
| Props  | any `Box` prop passes through (`role`, `aria-*`) | same                               |

Stack must stay invisible to assistive technology. If its children form a list, the app passes
`role="list"` to the Stack and `role="listitem"` to each child.

## Keyboard

| Key | Behaviour                                                             |
| --- | --------------------------------------------------------------------- |
| Tab | Moves to focusable children in source order. The Stack is not a stop. |

## Focus

Never takes focus. Reading and Tab order follow the order of the children in the source, which
matches the visual order because Stack only lays out in `row` or `column`, never reversed (WCAG
1.3.2, 2.4.3).

## Expected announcements

| Screen reader | Must hear                                                  |
| ------------- | ---------------------------------------------------------- |
| All           | The children only, in order. Nothing for the Stack itself. |

The virtual reader's transcripts (`e2e/__transcripts__/components-stack--*.txt`, added by
maxcwolf/wolf-ui#1) are empty, because the story's children are coloured boxes with no content.

## Known issues

- **A row does not reflow at 200% text.** `direction="row"` does not wrap; at large text sizes the
  children can overflow on narrow screens (WCAG 1.4.10). Pass `flexWrap="wrap"` or switch to a
  column at small widths. Not yet checked on devices.
- **Reversed directions are not offered on purpose.** `row-reverse` and `column-reverse` would
  make the visual order differ from the reading order. If they are ever added, they need a known
  issue here and a check in the keyboard suite.
