# Theming

Every wolf-ui component takes its colors, spacing, radii and type from the active theme, and
nothing else (lint `wolf/no-raw-color`). So changing the theme changes everything, at runtime,
with no restyling.

## Use the built-in light and dark themes

```tsx
import { ThemeProvider } from '@maxcwolf/ui-react-native';

export default function App() {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
}
```

With no props the provider follows the device (`'system'`), and switches live when the user
changes their appearance setting. On Android, Expo apps need `expo-system-ui` and
`"userInterfaceStyle": "automatic"` in `app.json` for the device setting to reach the app.

## Let the user choose

```tsx
import { useColorMode } from '@maxcwolf/ui-react-native';

function AppearanceSetting() {
  const { mode, setMode, name, names } = useColorMode();
  // mode: what was chosen ('system'); name: the theme showing now ('light')
  // names: every theme the provider has (['light', 'dark'])
  return <Button onPress={() => setMode('dark')}>Dark</Button>;
}
```

`useColorMode()` is for app code such as a settings screen. Components read the active theme's
tokens with `useTheme()` and never change the mode.

To remember the choice across launches, persist it yourself and hand it back:

```tsx
<ThemeProvider defaultMode={saved ?? 'system'} onModeChange={save}>
```

Or control it completely with `mode`, for example from your own settings store:

```tsx
<ThemeProvider mode={settings.theme}>
```

## Make a brand theme

`createWolfTheme(overrides, base)` copies `base` (the light theme by default) and changes only
what you pass. The result has the same type as the built-in themes.

```tsx
import { palette } from '@maxcwolf/ui-tokens';
import { createWolfTheme, darkTheme, ThemeProvider } from '@maxcwolf/ui-react-native';

const brand = createWolfTheme({
  colors: { primary: palette.green700, primaryPressed: palette.green800 },
  fontFamily: 'Inter', // every text variant
  borderRadii: { m: 4 },
});
const brandDark = createWolfTheme({ colors: { primary: palette.green300 } }, darkTheme);

<ThemeProvider themes={{ light: brand, dark: brandDark }}>
```

You can override `colors`, `spacing`, `borderRadii`, `textVariants` and `cardVariants` (each
variant is merged, so `{ heading1: { fontSize: 40 } }` keeps its weight and line height).

## Any number of themes

`themes` takes any names. `light` and `dark` back `'system'`; the rest are chosen by name.

```tsx
<ThemeProvider themes={{ light, dark, highContrast, sepia }} defaultMode="system">
// later: setMode('highContrast')
```

## Check your theme's contrast

Every theme you ship should pass the same WCAG 2.2 AA audit the built-in themes pass:

```ts
import { auditThemeContrast } from '@maxcwolf/ui-react-native';

it('meets WCAG AA', () => {
  expect(auditThemeContrast(brand)).toEqual([]);
  expect(auditThemeContrast(brandDark)).toEqual([]);
});
```

A failure names the pair and the measured ratio, e.g.
`{ foreground: 'onPrimary', background: 'primary', minimum: 4.5, ratio: 3.1 }`.

## Use the theme in your own components

Build on the primitives and pass theme names; everything stays themeable:

```tsx
import { Box, Text } from '@maxcwolf/ui-react-native';

<Box backgroundColor="surface" padding="l" borderRadius="m">
  <Text variant="heading3">Title</Text>
  <Text variant="body" color="textMuted">
    Body
  </Text>
</Box>;
```

For a value a prop cannot take (an SVG stroke, a third-party component's color), read it with
`useTheme()`: `useTheme().colors.primary`.

## Semantic colors

| Name                                                      | Use                                               |
| --------------------------------------------------------- | ------------------------------------------------- |
| `background`                                              | the page                                          |
| `surface`, `surfaceMuted`                                 | cards, inputs, sheets; filled or pressed surfaces |
| `border`, `borderStrong`                                  | dividers; outlines that must be seen (3:1)        |
| `text`, `textMuted`, `textDisabled`                       | body text, secondary text, disabled text          |
| `primary`, `primaryPressed`, `primarySubtle`, `onPrimary` | the main action and text on it                    |
| `danger`, `dangerPressed`, `dangerSubtle`, `onDanger`     | destructive actions and errors                    |
| `success`, `warning`                                      | status text and icons                             |
| `focusRing`                                               | the keyboard focus outline                        |
| `shadow`, `transparent`                                   | shadows; nothing                                  |

The values are in `packages/ui/src/theme/colors.ts`; the browsable reference is the
`Foundations/Theme` stories in Storybook.
