# Wolf UI 🐺

A themeable, type-safe, accessible component library for React Native, built on
[Restyle](https://github.com/Shopify/restyle). One codebase for **bare React Native**, **Expo**
and **Expo web** (react-native-web).

- **Swap themes at runtime.** Light, dark, follow-the-device, brand themes, or any number of
  named themes, with one provider and one hook ([docs/theming.md](docs/theming.md)).
- **Accessible by default.** WCAG 2.2 AA: every control has a role, a name, a 44dp target, a
  keyboard focus ring and scaling text, and both built-in themes pass a contrast audit you can
  run on your own themes too ([docs/accessibility.md](docs/accessibility.md)).
- **Type-safe.** Every color, space, radius and text style is a typed theme key.
- **No native setup.** Icons are SVG; the only native peer is `react-native-svg`.

| Package                                    | What it is                                                            |
| ------------------------------------------ | --------------------------------------------------------------------- |
| [`@maxcwolf/ui-react-native`](packages/ui) | Theme, primitives (Box, Text, Pressable) and components               |
| [`@maxcwolf/ui-tokens`](packages/tokens)   | Raw design tokens: palette, spacing, radii, type scale, contrast math |

## Install

```sh
yarn add @maxcwolf/ui-react-native @shopify/restyle react-native-svg
# Expo: npx expo install @maxcwolf/ui-react-native @shopify/restyle react-native-svg
```

Requires React 19 and React Native 0.79 or later. Expo web needs `react-dom` and
`react-native-web`, as for any Expo web app.

## Use

```tsx
import { Button, Card, Stack, Text, TextInput, ThemeProvider } from '@maxcwolf/ui-react-native';

export default function App() {
  const [email, setEmail] = useState('');
  return (
    <ThemeProvider>
      <Card>
        <Stack gap="m">
          <Text variant="heading2">Sign in</Text>
          <TextInput label="Email" value={email} onChangeText={setEmail} />
          <Button onPress={signIn} iconEnd="arrow-right">
            Continue
          </Button>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}
```

Switch theme anywhere below the provider:

```tsx
const { setPreference } = useThemeSwitcher();
setPreference('dark'); // or 'light', 'system', or any theme you registered
```

## Components

`Box`, `Text`, `Pressable` (primitives) · `Button` · `Card` · `Icon` · `Spinner` · `Stack` ·
`TextInput`. Browse them, in every theme, in Storybook: `yarn storybook:web`.

## Develop

Requires Node 22 (`.nvmrc`) and Corepack. Contributors and coding agents start with
**[AGENTS.md](AGENTS.md)**; the rules and the guard behind each are in
[docs/engineering-standards.md](docs/engineering-standards.md), and decisions in
[docs/adr/](docs/adr/).

```sh
corepack enable
yarn install                 # also installs the git hooks
yarn check                   # every guard: types, lint, format, architecture, dead code, tests, build
yarn new:component Badge     # scaffold a component that already passes every check
yarn storybook:web           # web Storybook at http://localhost:6006
yarn storybook:ios           # on-device Storybook in the iOS simulator (also :android)
yarn e2e                     # axe, keyboard and smoke tests over every story
yarn e2e:docker              # the same plus screenshot tests, in the pinned Playwright image
```

### How it is tested

| Layer           | Tool                                                                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit, component | Jest 30 + React Native Testing Library 14 (no Expo loaded)                                                                                                       |
| Contracts       | Every story rendered in both themes for accessibility; component structure; public API snapshot; theme contrast and parity                                       |
| Bundling        | `expo export` for iOS, Android and web in CI                                                                                                                     |
| Web end to end  | Playwright + axe-core over every story, both themes, desktop and mobile; keyboard flows                                                                          |
| Visual          | Playwright screenshots in Docker now; on-device captures with [targus](https://github.com/maxcwolf/targus) next ([ADR 0009](docs/adr/0009-visual-regression.md)) |

### Release

Changesets: add one with `yarn changeset` for any user-facing change. On `main`,
`.github/workflows/release.yml` opens a version PR and publishes when it merges (needs the
`NPM_TOKEN` secret).

## License

MIT
